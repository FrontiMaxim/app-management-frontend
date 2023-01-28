import axios from "axios";
import { IComment } from "../model/comment.interface";

export const createComment= async (url: string, body: IComment, token: string) => {
    const{ data } = await axios.post<IComment>(
        url, 
        body,
        { 
            headers: { 
                'Authorization': `Bearer ${token}`,
                
            }
        }
    );

    return data
}