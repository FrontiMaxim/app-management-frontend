import { UseFormRegister } from "react-hook-form";

export interface Option {
    name: string;
    value: string | number;
}

export interface PropsSelect {
    options: Option[];
    register: UseFormRegister<any>;
    nameFiled: 'role';
}