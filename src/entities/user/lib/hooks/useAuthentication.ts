import { useState } from "react";
import { IDataAuthentication } from "../../model/authenticate.interface";
import { authentication } from "../../api/authentication";
import { AUTHENTICATION_ERROR } from "../../errors/authentication.error";

interface IUseAuthentication {
    authenticate: (url: string, data: IDataAuthentication) => Promise<string>;
    isErrorAuthenticate: boolean;
}

export const useAuthentication = (): IUseAuthentication => {

    const [ isErrorAuthenticate, setIsErrorAuthenticate ] = useState<boolean>(false);
    
    const authenticate = async (url: string, data: IDataAuthentication): Promise<string>  => {

        try {
            const result = await authentication('/login', data);
            setIsErrorAuthenticate(false);   
            return result
        } catch (err) {
            setIsErrorAuthenticate(true);
            throw new AUTHENTICATION_ERROR('Такого пользователя нет в системе...');
        }
    }

    return {
        authenticate, 
        isErrorAuthenticate
    }
}