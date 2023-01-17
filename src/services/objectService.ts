import axios from "axios";
import { IObject } from "../interfaces/IObject";

export const getObjects = async (url: string ,id_user: string, token: string) => {
    const{ data } = await axios.get<IObject[]>(
        url, 
        { 
            params: { id_user }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}


export const createObject = async (url: string , body: IObject, token: string) => {
    return await axios.post(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}


export const updateObject = async (url: string , body: IObject, token: string) => {
    return await axios.put(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}