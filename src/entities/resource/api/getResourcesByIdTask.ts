import axios from "axios";
import { IResourceWithDateAndUser } from "../model/resourceWithDateAndUser";

export const getResourcesByIdTask = async (url: string, id_task: string, token: string) => {
    const{ data } = await axios.get<IResourceWithDateAndUser[]>(
        url, 
        { 
            params: { id_task }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}