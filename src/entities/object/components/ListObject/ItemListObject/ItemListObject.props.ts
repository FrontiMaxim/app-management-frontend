import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { IObject } from "../../../model/object.interface";

export interface IPropsItemListObject extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    isChange: boolean;
    data: IObject;
}