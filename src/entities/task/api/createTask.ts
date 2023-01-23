import axios from "axios";
import { ITask } from "../model/task.interface";

export const createTask = async (url: string, body: ITask, token: string) => {
    const{ data } = await axios.post<ITask[]>(
        url, 
        body,
        { 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}