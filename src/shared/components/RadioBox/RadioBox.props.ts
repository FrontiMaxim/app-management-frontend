import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface PropsRadioBox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>  {
    register: UseFormRegister<any>;
    nameField: string;
}