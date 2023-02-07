import { FieldValues, UseFormRegister } from "react-hook-form";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface PropsFieldPassword extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    nameField: 'password';
    placeholder: string;
    register: UseFormRegister<any>;
    minLength?: number;
    maxLength?: number;
    required: boolean
}