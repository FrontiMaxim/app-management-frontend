import axios from "axios";
import { IUser } from "../model/user.interface";

export const getUser = async (url: string, token: string) => {

    const { data } = await axios.get<IUser>(
        url, 
        {
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data;
}