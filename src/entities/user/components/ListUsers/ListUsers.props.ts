import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { IUser } from "../../model/user.interface";

export interface PropsListUsers extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    users: IUser[];
    isChange: boolean;
}