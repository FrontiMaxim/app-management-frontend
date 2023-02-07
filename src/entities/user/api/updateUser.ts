import axios from "axios";
import { IUser } from "../model/user.interface";

export const updateUser = async (url: string , body: IUser, token: string) => {
    return await axios.put<IUser>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}
