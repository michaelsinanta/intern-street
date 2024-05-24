import { FieldError, UseFormRegister } from "react-hook-form";

export type LoginFormData = {
  username: string;
  password: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<LoginFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | "username"
  | "password";
