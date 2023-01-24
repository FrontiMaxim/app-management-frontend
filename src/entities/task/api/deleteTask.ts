import axios from "axios";

export const deleteTask = async (url: string , id_task: string, token: string) => {
    return await axios.delete(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: { id_task }, 
        }
    );
}