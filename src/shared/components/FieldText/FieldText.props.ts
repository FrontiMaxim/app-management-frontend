import { UseFormRegister } from "react-hook-form";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface PropsFieldText extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    nameField: any;
    placeholder: string;
    register: UseFormRegister<any>;
    minLength?: number;
    maxLength?: number;
}