import { UseFormRegister } from "react-hook-form";
import { IDataAuthentication } from "../../../entities/user";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface PropsFieldText extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    nameField: any;
    placeholder: string;
    register: UseFormRegister<IDataAuthentication>;
    minLength?: number;
    maxLength?: number;
}