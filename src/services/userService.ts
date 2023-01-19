import axios from "axios";
import { IUser } from "../interfaces/IUser";

export const getUsers = async (url: string, token: string) => {
    const { data } = await axios.get<IUser[]>(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}


export const getUser = async (url: string, token: string) => {
    const { data } = await axios.get<IUser>(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
        }
    );

    return data
}


export const createUser = async (url: string, body: IUser, token: string) => {
    return await axios.post(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}


export const updateUser = async (url: string , body: IUser, token: string) => {
    return await axios.put(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );
}


export const deleteUser = async (url: string , id_user: string, token: string) => {
    return await axios.delete(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: { id_user }, 
        }
    );
}