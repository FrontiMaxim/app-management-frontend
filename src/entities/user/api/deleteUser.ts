import axios from "axios";

export const deleteUser = async (url: string , id_user: string, token: string) => {
    return await axios.delete(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: { id_user }, 
        }
    );
}