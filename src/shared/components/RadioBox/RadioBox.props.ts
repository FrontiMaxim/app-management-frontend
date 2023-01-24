import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface PropsRadioBox extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>  {
    register: UseFormRegisterReturn;
}