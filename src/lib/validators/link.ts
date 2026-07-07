import { z } from "zod";

export const createLinkSchema = z.object({
  originalUrl: z.string().url("Please enter a valid URL"),
});

export type CreateLinkInput = z.infer<typeof createLinkSchema>;