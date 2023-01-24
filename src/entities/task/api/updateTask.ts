import axios from "axios";
import { ITask } from "../model/task.interface";

export const updateTask = async (url: string, body: ITask, token: string) => {
    const{ data } = await axios.put<ITask[]>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}