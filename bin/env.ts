import { z } from "zod";

const envSchema = z.object({
  AWS_ACCOUNT_ID: z
    .string({
      invalid_type_error: "AWS account ID is required",
      required_error: "AWS account ID is required",
    })
    .length(12, "AWS account ID must be a 12-digit number")
    .regex(/\d/, "AWS account ID must be a 12-digit number"),
  AWS_REGION: z
    .string({
      invalid_type_error: "AWS region is required",
      required_error: "AWS region is required",
    })
    .min(1, "AWS region is required"),
  AWS_PROFILE: z
    .string({
      invalid_type_error: "AWS profile is required",
      required_error: "AWS profile is required",
    })
    .min(1, "AWS profile is required"),
  PROJECT_TAG: z
    .string()
    .min(0, "Tag value must have at least 0 characters")
    .max(256, "Tag value must have a maximum of 256 characters")
    .regex(
      /[a-zA-Z0-9_.:/=+\-@ ]+/,
      "Only letters, numbers, spaces and the following characters are allowed: _ . : / = + - @",
    )
    .optional(),
});

export function validateEnv(env: NodeJS.ProcessEnv) {
  const parsedEnv = envSchema.safeParse(env);
  if (!parsedEnv.success) {
    console.error(parsedEnv.error.format());
    process.exit(1);
  }
  return parsedEnv.data;
}
