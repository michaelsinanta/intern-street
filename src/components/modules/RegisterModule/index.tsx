"use client";
import { useForm } from "react-hook-form";
import { FormField } from "./formField";
import { FormData, RegisterSchema } from "./types";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E24E42] w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-4 bg-white shadow-md rounded">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />

          <FormField
            type="text"
            placeholder="Full Name"
            name="fullname"
            register={register}
            error={errors.fullname}
          />

          <FormField
            type="number"
            placeholder="Age"
            name="age"
            register={register}
            error={errors.age}
            valueAsNumber
          />

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <FormField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}