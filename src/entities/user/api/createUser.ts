import axios from "axios";
import { IUser } from "../model/user.interface";

export const createUser = async (url: string, body: IUser, token: string) => {
    return await axios.post<IUser>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}
