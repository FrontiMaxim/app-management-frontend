import { ElementType } from "react";
import { IconBaseProps } from "react-icons/lib";

export interface PropsMenuItem {
    icon?: ElementType<IconBaseProps>;
    value: string;
    href: string;
    withBadge: boolean;
}