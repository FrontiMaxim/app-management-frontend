import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface PropsCheckBox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>  {
    register: UseFormRegister<any>;
    nameField: string;
}