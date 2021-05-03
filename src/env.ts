// contains all configuration for dev and prod environment

export const isDev = process.env.IS_DEV || true; // isDev will be true by default
export const isProd = process.env.IS_PROD || false; // isProd will be false by default
