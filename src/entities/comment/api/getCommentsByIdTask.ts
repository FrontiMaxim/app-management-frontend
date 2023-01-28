import axios from "axios";
import { IComment } from "../model/comment.interface";

export const getCommentsByIdTask = async (url: string, id_task: string, token: string) => {
    const{ data } = await axios.get<IComment[]>(
        url, 
        { 
            params: { id_task }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}