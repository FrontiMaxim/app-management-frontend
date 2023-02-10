import axios from "axios";

export const deleteObject = async (url: string , id_object: string, token: string) => {
    return await axios.delete(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: { id_object }, 
        }
    );
}