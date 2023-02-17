import axios from "axios";

export const updateAvatarByLogin = async (url: string , body: FormData, login: string, token: string) => {
    return await axios.put<FormData>(
        url, 
        body,
        { 
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            params: {
                login
            }
        }
    );
}