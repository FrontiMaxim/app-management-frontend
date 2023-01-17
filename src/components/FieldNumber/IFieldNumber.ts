import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IPropsFieldNumber extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    placeholder: string;
    register: UseFormRegisterReturn; 
    min?: number;
    max?: number;
}