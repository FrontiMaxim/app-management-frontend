import axios from "axios";
import { IResource } from "../model/resource.interface";

export const getResourcesByIdTask = async (url: string, id_task: string, token: string) => {
    const{ data } = await axios.get<IResource[]>(
        url, 
        { 
            params: { id_task }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}