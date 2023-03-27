import axios from "axios";

export const updateNotification = async (url: string , id_task: string, token: string) => {
    return await axios.put<string>(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: {
                id_task
            }
        }
    );
}