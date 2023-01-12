import { UseFormRegisterReturn } from "react-hook-form";

type typesInput = 'text' | 'password';

export interface IField {
    type: typesInput;
    placeholder: string;
    register: UseFormRegisterReturn; 
}