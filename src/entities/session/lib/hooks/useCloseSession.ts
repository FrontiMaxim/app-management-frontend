import { useLoacalStorage } from "../../../../shared";
import { UseMutateFunction, useMutation } from "react-query";
import { ISession } from "../../model/session.interface";
import { closeSession } from "../../api/closeSession";
import { AxiosResponse } from "axios";

interface IUseCloseSession {
    close: UseMutateFunction<AxiosResponse<any, any>, unknown, ISession, unknown>;
    isErrorCloseSession: boolean;
}

export const useCloseSession = (): IUseCloseSession => {

    const [token] = useLoacalStorage<string>('token');
 
    const { mutate: close, isError: isErrorCloseSession } = useMutation((session: ISession) => {
        return closeSession('/session/close', token as string, session);
    });

    return {
        close,
        isErrorCloseSession
    }
}