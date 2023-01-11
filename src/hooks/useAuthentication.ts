import { useState } from "react";
import { ILogin } from "../pages/Login/ILogin";
import axios from "axios";
import { useAppDispatch } from "../store";
import { installToken } from "../store/tokenSlice";

interface IUseAuthentication {
    authenticate: (url: string, loginData: ILogin) => Promise<void>;
    isErrorAuthenticate: boolean;
    isAuthenticate: boolean
}

export const useAuthentication = (): IUseAuthentication => {

    const [ isErrorAuthenticate, setIsErrorAuthenticate ] = useState<boolean>(false);
    const [ isAuthenticate, setIsAuthenticate ] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const authenticate = async (url: string, loginData: ILogin): Promise<void> => {

        try {
            const { data: { token } } = await axios.post(url, loginData);
            setIsErrorAuthenticate(false);
            dispatch(installToken(token));
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