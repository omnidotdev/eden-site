/**
 * Environment variables.
 */
// Build-time vars take precedence to prevent SSR hydration mismatch
const env =
  typeof window === "undefined"
    ? { ...process.env, ...import.meta.env }
    : import.meta.env;

export const {
  // core
  VITE_BASE_URL: BASE_URL,
  // Feature flags
  VITE_FLAGS_API_HOST: FLAGS_API_HOST,
  VITE_FLAGS_CLIENT_KEY: FLAGS_CLIENT_KEY,
} = env;

// environment helpers
export const isDevEnv = import.meta.env.DEV;
export const isProdEnv = import.meta.env.PROD;
