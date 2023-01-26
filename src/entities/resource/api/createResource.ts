import axios from "axios";
import { IResource } from "../model/resource.interface";

export const createResource= async (url: string, body: FormData, params: IResource, token: string) => {
    const{ data } = await axios.post<FormData>(
        url, 
        body,
        { 
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            params: {
                ...params
            } 
        }
    );

    return data
}