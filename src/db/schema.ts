import { pgTable, varchar, serial, timestamp, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const tokensTable = pgTable("tokens", {
  token: text("token").notNull().unique().primaryKey(),
  email: text("email").notNull().unique(),
  expiresAt: timestamp("created_at").notNull(),
})
