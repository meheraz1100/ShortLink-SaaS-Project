import { z } from "zod";

export const linkSchema = z.object({
  originalUrl: z
    .string()
    .trim()
    .url("Please enter a valid URL"),

  customAlias: z
    .string()
    .trim()
    .regex(
      /^[a-zA-Z0-9_-]*$/,
      "Only letters, numbers, - and _ are allowed"
    )
    .max(30, "Maximum 30 characters")
    .optional()
    .or(z.literal("")),

  expiresAt: z
    .string()
    .optional()
    .or(z.literal("")),
});

export type LinkFormData = z.infer<typeof linkSchema>;