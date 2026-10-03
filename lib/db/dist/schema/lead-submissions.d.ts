export type LeadDeliveryState = "pending" | "sent" | "failed";
export interface LeadDeliveryStates {
    hubspot: LeadDeliveryState;
    googleSheets: LeadDeliveryState;
    gmail: LeadDeliveryState;
}
export declare const leadSubmissionsTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "lead_submissions";
    schema: undefined;
    columns: {
        submissionId: import("drizzle-orm/pg-core").PgColumn<{
            name: "submission_id";
            tableName: "lead_submissions";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        payload: import("drizzle-orm/pg-core").PgColumn<{
            name: "payload";
            tableName: "lead_submissions";
            dataType: "json";
            columnType: "PgJsonb";
            data: Record<string, unknown> | null;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: Record<string, unknown> | null;
        }>;
        deliveries: import("drizzle-orm/pg-core").PgColumn<{
            name: "deliveries";
            tableName: "lead_submissions";
            dataType: "json";
            columnType: "PgJsonb";
            data: LeadDeliveryStates;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: LeadDeliveryStates;
        }>;
        hubspotContactId: import("drizzle-orm/pg-core").PgColumn<{
            name: "hubspot_contact_id";
            tableName: "lead_submissions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        googleSheetRow: import("drizzle-orm/pg-core").PgColumn<{
            name: "google_sheet_row";
            tableName: "lead_submissions";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        createdAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "created_at";
            tableName: "lead_submissions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "lead_submissions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export type LeadSubmissionRow = typeof leadSubmissionsTable.$inferSelect;
export type NewLeadSubmissionRow = typeof leadSubmissionsTable.$inferInsert;
//# sourceMappingURL=lead-submissions.d.ts.map