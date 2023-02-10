import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";

export interface PropsFieldNumber extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    placeholder: string;
    register: UseFormRegister<any>; 
    nameField: string;
    min?: number;
    max?: number;
}