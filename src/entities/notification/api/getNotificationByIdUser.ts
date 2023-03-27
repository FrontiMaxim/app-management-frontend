import axios from "axios";
import { INotificationWithoutUser } from "../model/notificationWithoutUser.interface";

export const getNotificationByIdUser = async (url: string, id_user: string, token: string) => {
    const{ data } = await axios.get<INotificationWithoutUser[]>(
        url, 
        { 
            params: { id_user }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}