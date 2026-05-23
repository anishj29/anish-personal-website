import { google } from '@ai-sdk/google';
import { convertToModelMessages, embed, streamText } from 'ai';
import { Pinecone } from '@pinecone-database/pinecone';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

export const maxDuration = 30;

// Initialize the rate limiter: 5 requests per 1 minute window
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
});

/** Last user turn as plain text (works with UI messages from useChat + convertToModelMessages). */
function latestUserQueryFromModelMessages(modelMessages) {
  for (let i = modelMessages.length - 1; i >= 0; i--) {
    const m = modelMessages[i];
    if (m.role !== 'user') continue;
    const c = m.content;
    if (typeof c === 'string') return c;
    if (Array.isArray(c)) {
      return c
        .filter((p) => p.type === 'text')
        .map((p) => p.text)
        .join('\n');
    }
  }
  return '';
}

export async function POST(req) {
  try {
    // Extract the user's IP address (Vercel sets 'x-forwarded-for' automatically)
    // Fallback to 'anonymous' for local development testing
    const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';

    // Check the rate limit
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return new Response(
        JSON.stringify({
          error:
            'Rate limit exceeded. Please wait a minute before sending more messages.',
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = await req.json();
    const modelMessages = await convertToModelMessages(messages);
    const latestMessage = latestUserQueryFromModelMessages(modelMessages);

    if (!latestMessage?.trim()) {
      return new Response(
        JSON.stringify({
          error:
            'Missing user message text. The chat client must send UI messages compatible with the AI SDK.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Embeddings: gemini-embedding-001 @ 768 dims (matches Pinecone + ingest; text-embedding-004 is deprecated on the Generative Language API)
    const { embedding } = await embed({
      model: google.embedding('gemini-embedding-001'),
      value: latestMessage,
      providerOptions: {
        google: {
          outputDimensionality: 768,
          taskType: 'RETRIEVAL_QUERY',
        },
      },
    });

    const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    const index = pc.index(process.env.PINECONE_INDEX_NAME);

    // 2. Query Pinecone with the 768-dimension vector
    const queryResponse = await index.query({
      vector: embedding,
      topK: 3,
      includeMetadata: true,
    });

    const context = queryResponse.matches
      .map((match) => match.metadata?.text ?? '')
      .filter(Boolean)
      .join('\n\n---\n\n');

    const systemPrompt = `You are the digital clone of Anish Jha, integrated into his Next.js portfolio.
You answer questions from recruiters and developers about his experience, projects, and skills.
Use a professional, approachable, and slightly conversational tone. 

Answer the user's query using ONLY the context provided below. 
If the answer cannot be deduced from the context, politely explain that you only know about his professional background and suggest they reach out to him directly.

Context:
${context}
`;

    // 3. Generate streaming response using Gemini 2.5 Flash
    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
