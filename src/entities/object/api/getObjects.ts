import axios from "axios";
import { IObject } from "../model/object.interface";

export const getObjects = async (url: string, id_user: string, token: string) => {
    const{ data } = await axios.get<IObject[]>(
        url, 
        { 
            params: { id_user }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}
