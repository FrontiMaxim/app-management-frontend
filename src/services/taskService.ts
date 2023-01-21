import axios from "axios";
import { ITask } from "../interfaces/ITask";

export const getTasksByIdObject = async (url: string ,id_object: string, token: string) => {
    const{ data } = await axios.get<ITask[]>(
        url, 
        { 
            params: { id_object }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}