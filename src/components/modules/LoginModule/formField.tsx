import React from "react";
import { FormFieldProps } from "./loginTypes";

export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
    />
    {error && <span className="text-white">{error.message}</span>}
  </div>
);
