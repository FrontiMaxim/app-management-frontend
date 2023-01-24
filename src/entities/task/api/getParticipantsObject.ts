import axios from "axios";
import { IUser } from "../../user";

export const getParticipantsObject = async (url: string, id_object: string, token: string) => {
    const{ data } = await axios.get<IUser[]>(
        url, 
        { 
            params: { id_object }, 
            headers: { Authorization: `Bearer ${token}`} 
        }
    );

    return data
}