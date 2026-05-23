import { Pinecone } from '@pinecone-database/pinecone';
import { google } from '@ai-sdk/google';
import { embedMany } from 'ai';
import { PDFParse } from 'pdf-parse';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function ingestResume() {
  console.log('1. Downloading resume from S3...');
  const response = await fetch(process.env.RESUME_URL);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log('2. Extracting text from PDF...');
  const parser = new PDFParse({ data: buffer });
  let fullText;
  try {
    const pdfData = await parser.getText();
    fullText = pdfData.text;
  } finally {
    await parser.destroy();
  }

  console.log('3. Chunking text...');
  const chunks = fullText
    .split(/\n\n|\n•/)
    .map(chunk => chunk.trim())
    .filter(chunk => chunk.length > 30);

  console.log(`Found ${chunks.length} meaningful chunks.`);

  console.log('4. Generating embeddings via Gemini...');
  const { embeddings } = await embedMany({
    model: google.embedding('gemini-embedding-001'),
    values: chunks,
    providerOptions: {
      google: {
        outputDimensionality: 768,
        taskType: 'RETRIEVAL_DOCUMENT',
      },
    },
  });

  console.log('5. Connecting to Pinecone...');
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(process.env.PINECONE_INDEX_NAME);

  console.log('6. Formatting records for Pinecone...');
  const records = chunks.map((chunk, i) => ({
    id: `resume-chunk-${i}`,
    values: embeddings[i],
    metadata: {
      text: chunk,
      source: 'resume.pdf'
    },
  }));

  console.log('7. Upserting vectors to Pinecone...');
  await index.upsert({ records });

  console.log('✅ Success! Your resume is now live in Pinecone (768 dimensions).');
}

ingestResume().catch(console.error);
