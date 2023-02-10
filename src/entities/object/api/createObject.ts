import axios from "axios";
import { IObject } from "../model/object.interface";

export const createObject = async (url: string , body: IObject, token: string) => {
    return await axios.post<IObject>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}