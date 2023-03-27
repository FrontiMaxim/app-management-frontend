import axios from "axios";
import { INotification } from "../model/notification.interface";

export const createNotification = async (url: string, body: INotification, token: string) => {
    return await axios.post<INotification>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}
