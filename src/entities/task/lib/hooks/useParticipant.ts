import { useQuery } from "react-query";
import { IUser } from "../../../user";
import { useLoacalStorage } from "../../../../shared";
import { getParticipantsObject } from "../../api/getParticipantsObject";

interface IUseParticipant {
    participants: IUser[] | undefined;
    isLoading: boolean,
    isError: boolean,
}

export const useParticipant = (id_object: string): IUseParticipant => {
    const [token] = useLoacalStorage<string>('token');

    const { data: participants, isLoading, isError } = useQuery<IUser[], Error, IUser[], string>(
        'participants', 
        () => getParticipantsObject('/user/read/participants_object', id_object, token!)
    );

    return {
        participants,
        isLoading,
        isError,
    }
}