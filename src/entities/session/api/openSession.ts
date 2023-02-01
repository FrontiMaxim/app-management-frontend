import axios from "axios";

export const openSession = async (url: string, token: string) => {

    const { data } = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
      
    return data;
}