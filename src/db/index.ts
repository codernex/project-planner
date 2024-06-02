import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { DATABASE_URL } from "../config";

const client = new Pool({
  connectionString: DATABASE_URL,
});
export const DB: NodePgDatabase<typeof schema> = drizzle(client, { schema });