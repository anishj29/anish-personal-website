declare namespace NodeJS {
  interface ProcessEnv {
    PINECONE_API_KEY?: string;
    PINECONE_INDEX_NAME?: string;
    GOOGLE_GENERATIVE_AI_API_KEY?: string;
    RESUME_URL?: string;
    KV_URL?: string;
    KV_REST_API_URL?: string;
    KV_REST_API_TOKEN?: string;
    KV_REST_API_READ_ONLY_TOKEN?: string;
  }
}
