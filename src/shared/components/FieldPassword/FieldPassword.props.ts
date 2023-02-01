import { UseFormRegister } from "react-hook-form";
import { IDataAuthentication } from "../../../entities/user";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface PropsFieldPassword extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    nameField: 'password';
    placeholder: string;
    register: UseFormRegister<IDataAuthentication>;
    minLength?: number;
    maxLength?: number;
}