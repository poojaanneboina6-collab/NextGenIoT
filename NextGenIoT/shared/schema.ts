import { pgTable, serial, text, real, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const scans = pgTable("scans", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url").notNull(),
  diseaseName: text("disease_name").notNull(),
  diseaseConfidence: real("disease_confidence").notNull(),
  treatment: text("treatment").notNull(),
  supplierName: text("supplier_name").notNull(),
  supplierAddress: text("supplier_address").notNull(),
  language: text("language").notNull().default("en"),
  translatedOutput: text("translated_output"),
  latitude: real("latitude"),
  longitude: real("longitude"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertScanSchema = createInsertSchema(scans).omit({
  id: true,
  createdAt: true,
});

export type Scan = typeof scans.$inferSelect;
export type InsertScan = z.infer<typeof insertScanSchema>;
