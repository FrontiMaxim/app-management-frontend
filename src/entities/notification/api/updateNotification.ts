import axios from "axios";

export const updateNotification = async (url: string , id_task: string, id_user: string, token: string) => {

    return await axios.put(
        url, 
        {},
        { 
            headers: { 'Authorization': `Bearer ${token}`},
            params: {
                id_task,
                id_user
            }
        }
    );
}