import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export const RegisterSchema: ZodType<FormData> = z
  .object({
    email: z.string().email(),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(20, { message: "Username must be at least 20 characters short" }),
    fullname: z
      .string()
      .min(3, { message: "Full name must be at least 3 characters long" }),
    age: z
      .number()
      .int({ message: "Age must be a whole number" })
      .min(18, { message: "You must be at least 18 years old" })
      .max(100, { message: "You cannot be older than 100 years" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormData = {
  email: string;
  username: string;
  fullname: string;
  age: number;
  password: string;
  confirmPassword: string;
};
