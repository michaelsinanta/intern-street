"use client";
import { useForm } from "react-hook-form";
import { FormData, RegisterSchema } from "./types";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { Input } from "@/components/elements";

export default function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E24E42] w-full">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-4 bg-white shadow-md rounded"
      >
        <div className="grid grid-cols-1 gap-4">
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Masukkan Email"
            required
            label="Email"
          />
          <Input
            control={control}
            name="username"
            type="text"
            placeholder="Masukkan Username"
            required
            label="Username"
          />
          <Input
            control={control}
            name="fullname"
            type="text"
            placeholder="Masukkan Nama Lengkap"
            required
            label="Full Name"
          />
          <Input
            control={control}
            name="age"
            type="number"
            placeholder="Masukkan Umur"
            required
            label="Age"
          />
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Masukkan Password"
            required
            label="Password"
          />
          <Input
            control={control}
            name="confirmPassword"
            type="password"
            placeholder="Konfirmasi Password"
            required
            label="Confirm Password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
