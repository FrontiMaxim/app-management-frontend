import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IPropsCalendar extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    register: UseFormRegisterReturn; 
}