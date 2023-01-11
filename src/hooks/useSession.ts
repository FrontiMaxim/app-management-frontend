import axios from "axios";
import { ISession } from "../interfaces/ISession";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { installSession } from "../store/sessionSlice";

interface IUseSession {
    openSession: (url: string, token: string) => Promise<void>;
    closeSession: (url: string, token: string, session: ISession) => Promise<void>;
    isErrorOpenSession: boolean;
    isErrorCloseSession: boolean;
}

export const useSession = (): IUseSession => {

    const [ isErrorOpenSession, setIsErrorOpenSession ] = useState<boolean>(false);
    const [ isErrorCloseSession, setIsErrorCloseSession ] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    async function openSession (url: string, token: string): Promise<void> {

        try {
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setIsErrorOpenSession(false);
            dispatch(installSession(data));
        } catch(err) {
            setIsErrorOpenSession(true);
        }
    }

    async function closeSession (url: string, token: string, session: ISession): Promise<void> {

        try {
            await axios.put(url, session, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setIsErrorCloseSession(false);
        } catch(err) {
            setIsErrorCloseSession(true);
        }
       
    }

    return {
        openSession,
        closeSession,
        isErrorOpenSession,
        isErrorCloseSession
    }
}