import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { ITask } from "../../../entities/task";

export interface PropsTextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    register: UseFormRegister<ITask>; 
    nameField: 'description';
    minLength?: number;
    maxLength?: number;
}