import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id:uuid("id").primaryKey().defaultRandom().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});