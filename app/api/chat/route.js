import { google } from '@ai-sdk/google';
import { embed, streamText } from 'ai';
import { Pinecone } from '@pinecone-database/pinecone';

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1].content;

    // 1. Generate embedding using Gemini's text-embedding-004 (768 dimensions)
    const { embedding } = await embed({
      model: google.textEmbeddingModel('text-embedding-004'),
      value: latestMessage,
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
      .map((match) => match.metadata.text)
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
      messages: messages,
    });

    return result.toDataStreamResponse();
    
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
