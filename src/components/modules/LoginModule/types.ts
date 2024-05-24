import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  username: string;
  fullname: string;
  age: number;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | "email"
  | "username"
  | "fullname"
  | "age"
  | "password"
  | "confirmPassword";
