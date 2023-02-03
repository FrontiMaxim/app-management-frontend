import { ReactNode } from "react";

export interface PropsMenuItem {
    icon?: ReactNode;
    value: string;
    href: string;
}