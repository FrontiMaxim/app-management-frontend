import { useState } from "react";
import { ILogin } from "../pages/Login/ILogin";
import axios from "axios";

interface IUseAuthentication {
    authenticate: (url: string, loginData: ILogin) => Promise<void>;
    isErrorAuthenticate: boolean;
    isAuthenticate: boolean
}

export const useAuthentication = (): IUseAuthentication => {

    const [ isErrorAuthenticate, setIsErrorAuthenticate ] = useState<boolean>(false);
    const [ isAuthenticate, setIsAuthenticate ] = useState<boolean>(false);

    const authenticate = async (url: string, loginData: ILogin): Promise<void> => {

        try {
            const { data: { token } } = await axios.post(url, loginData);
            setIsErrorAuthenticate(false);
            localStorage.setItem('token', token);
            setIsAuthenticate(true);
        } catch (err) {
            setIsErrorAuthenticate(true);
        }
    }

    return {
        authenticate, 
        isErrorAuthenticate,
        isAuthenticate
    }
}