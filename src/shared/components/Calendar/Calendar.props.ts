import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export interface PropsCalendar extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    register: UseFormRegister<any>; 
    nameField: string;
}