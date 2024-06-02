import dotenv from "dotenv";

dotenv.config();

export const { DATABASE_URL, NODE_ENV } = process.env as {
  DATABASE_URL: string
  NODE_ENV: string
};