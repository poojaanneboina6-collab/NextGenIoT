import { z } from "zod";
import type { Scan } from "./schema";

export const ScanSchema = z.object({
  id: z.number(),
  imageUrl: z.string(),
  diseaseName: z.string(),
  diseaseConfidence: z.number(),
  treatment: z.string(),
  supplierName: z.string(),
  supplierAddress: z.string(),
  language: z.string(),
  translatedOutput: z.string().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  createdAt: z.string().or(z.date()).nullable(),
});

export type ScanResponse = z.infer<typeof ScanSchema>;
export type ScansListResponse = ScanResponse[];

export function buildUrl(path: string, params: Record<string, string | number>): string {
  let url = path;
  for (const [key, value] of Object.entries(params)) {
    url = url.replace(`:${key}`, String(value));
  }
  return url;
}

export const api = {
  scans: {
    list: {
      path: "/api/scans",
      method: "GET",
      responses: {
        200: z.array(ScanSchema),
      },
    },
    get: {
      path: "/api/scans/:id",
      method: "GET",
      responses: {
        200: ScanSchema,
      },
    },
    create: {
      path: "/api/scans",
      method: "POST",
      input: z.object({
        image: z.string(),
        language: z.string().default("en"),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
      }),
      responses: {
        201: ScanSchema,
      },
    },
  },
  recommend: {
    post: {
      path: "/api/recommend",
      method: "POST",
      input: z.object({
        N: z.number(),
        P: z.number(),
        K: z.number(),
        ph: z.number(),
        location: z.string(),
        rainfall: z.number().optional(),
      }),
      responses: {
        200: z.object({
          recommendations: z.array(
            z.object({
              crop: z.string(),
              confidence: z.number(),
              ideal: z.record(z.any()),
            })
          ),
        }),
      },
    },
  },
};
