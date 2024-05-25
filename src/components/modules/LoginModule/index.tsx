"use client";
import { useForm } from "react-hook-form";
import { FormField } from "./formField";
import React from "react";
import { LoginFormData } from "./loginTypes";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E24E42] w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-4 bg-white shadow-md rounded"
      >
        <div className="grid grid-cols-1 gap-4">
          <FormField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
