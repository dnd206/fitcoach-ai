// Safe to commit - no secrets here
// In production, point OPENAI_ENDPOINT at your backend proxy
// (e.g. '/api/fitcoach') instead of the OpenAI URL.
const CONFIG = {
  OPENAI_MODEL: 'gpt-4.1-mini',
  OPENAI_ENDPOINT: '/api/fitcoach',
  MAX_SAVED_RUNS: 20
};
