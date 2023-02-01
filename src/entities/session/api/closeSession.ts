import axios from "axios";
import { ISession } from "../model/session.interface";

export const closeSession = async (url: string, token: string, session: ISession) => {
    
    return await axios.put(url, session, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}