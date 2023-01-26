import axios from "axios";

export const deleteResource = async (url: string , id_resource: string, token: string) => {
    return await axios.delete(
        url, 
        { 
            headers: { Authorization: `Bearer ${token}`},
            params: { id_resource }, 
        }
    );
}