import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { ITask } from "../../../entities/task";

export interface PropsCalendar extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    register: UseFormRegister<ITask>; 
    nameField: 'deadline';
}