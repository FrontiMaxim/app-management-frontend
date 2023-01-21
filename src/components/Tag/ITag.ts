import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface IPropsTag extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    type: 'SCHEDULED' | 'ON_PROGRES' | 'COMPLETE';
}