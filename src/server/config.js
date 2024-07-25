// config.js
const env = process.env;

export const PORT = env.PORT ?? "3000";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGO = env.MONGO ?? "";

export default {
  PORT,
  HOST,
  SERVER_URL,
  PW_MONGO: MONGO,
};
