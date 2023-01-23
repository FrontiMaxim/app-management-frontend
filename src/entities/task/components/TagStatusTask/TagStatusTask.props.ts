import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsTagStatusTask extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
    type: 'SCHEDULED' | 'ON_PROGRES' | 'COMPLETE';
}