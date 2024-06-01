import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export const LoginSchema: ZodType<FormData> = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at least 20 characters short" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type FormData = {
  username: string;
  password: string;
};
