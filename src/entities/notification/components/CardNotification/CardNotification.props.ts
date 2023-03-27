import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { INotificationWithoutUser } from "../../model/notificationWithoutUser.interface";

export interface PropsCardNotification extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    data: INotificationWithoutUser;
    type: 'MESSAGE' | 'RESOURCE' | string;
}