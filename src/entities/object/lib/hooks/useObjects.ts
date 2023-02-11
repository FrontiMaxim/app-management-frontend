import { useQuery } from "react-query";
import { IObject } from "../../model/object.interface";
import { useLoacalStorage } from "../../../../shared";
import { getObjects } from "../../api/getObjects";
import { useAppSelector } from "../../../../store";


interface IUseObjects {
    objects: IObject[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useObjects = (): IUseObjects => {
    const [token] = useLoacalStorage<string>('token');
    const id_user = useAppSelector(state => state.user.id_user);
  
    const { data: objects, isLoading, isError } = useQuery<IObject[], Error,IObject[], string>(
        'objects', 
        () => getObjects('/object/read/all', id_user, token!),
        {
            enabled: !!id_user,
            refetchInterval: 1000 * 60 
        }
    );

    return {
        objects,
        isLoading,
        isError,
    }
}