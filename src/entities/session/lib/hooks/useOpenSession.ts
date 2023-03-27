import { useLoacalStorage } from "../../../../shared";
import { useQuery } from "react-query";
import { ISession } from "../../model/session.interface";
import { openSession } from "../../api/openSession";

interface IUseOpenSession {
    session: ISession | undefined;
    isLoading: boolean;
    isErrorOpenSession: boolean;
}

export const useOpenSession = (): IUseOpenSession => {

    const [token] = useLoacalStorage<string>('token');

    const { data: session, isLoading, isError: isErrorOpenSession } = useQuery<ISession, Error, ISession, string>(
        'session', 
        () => openSession('/session/open', token!)
    );

    return {
        session,
        isLoading,
        isErrorOpenSession,
    }
}