import { UseFormRegisterReturn } from "react-hook-form";

export type Option = {
    name: string;
    value: string | number;
}

export interface ISelect {
    options: Option[]
    register: UseFormRegisterReturn;
}