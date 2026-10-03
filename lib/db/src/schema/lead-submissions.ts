import {
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export type LeadDeliveryState = "pending" | "sent" | "failed";

export interface LeadDeliveryStates {
  hubspot: LeadDeliveryState;
  googleSheets: LeadDeliveryState;
  gmail: LeadDeliveryState;
}

export const leadSubmissionsTable = pgTable("lead_submissions", {
  submissionId: uuid("submission_id").primaryKey(),
  payload: jsonb("payload").$type<Record<string, unknown> | null>(),
  deliveries: jsonb("deliveries").$type<LeadDeliveryStates>().notNull(),
  hubspotContactId: text("hubspot_contact_id"),
  googleSheetRow: integer("google_sheet_row"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type LeadSubmissionRow = typeof leadSubmissionsTable.$inferSelect;
export type NewLeadSubmissionRow = typeof leadSubmissionsTable.$inferInsert;