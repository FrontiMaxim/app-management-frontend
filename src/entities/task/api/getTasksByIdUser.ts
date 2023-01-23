import axios from "axios";
import { ITask } from "..";

export const getTasksByIdUser = async (url: string, id_user: string, token: string) => {
    const{ data } = await axios.get<ITask[]>(
        url, 
        { 
            params: { id_user }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}