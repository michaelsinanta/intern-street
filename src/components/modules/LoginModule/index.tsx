"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { LoginSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/elements";

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
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
            name="username"
            type="text"
            placeholder="Masukkan Username"
            required
            label="Username"
          />
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Masukkan Password"
            required
            label="Password"
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
