import { UseFormRegister } from "react-hook-form";
import { ILogin } from "../../pages/Login/ILogin";

type namesField = 'login' | 'password';
type typesInput = 'text' | 'password';

export interface IField {
    type: typesInput;
    placeholder: string;
    register: UseFormRegister<ILogin>;
    nameField: namesField;
}