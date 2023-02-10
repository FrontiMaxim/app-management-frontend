import axios from "axios";
import { IObject } from "../model/object.interface";

export const updateObject = async (url: string , body: IObject, token: string) => {
    return await axios.put<IObject>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}