import { useQuery } from "react-query";
import { IObject } from "../interfaces/IObject";
import { getObjects } from "../services/objectService";

interface IUseObjects {
    objects: IObject[] | undefined,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean
}
 
export const useObjects = (): IUseObjects => {

    const token = localStorage.getItem('token');

    const { data: objects, isLoading, isError, isSuccess } = useQuery<IObject[], Error, IObject[], string>(
        'objects', 
        () => getObjects('/object/read/objects', 'cec5d6b7-fa7b-43c4-9c4a-6518e5718571', token!),
        {
            initialData: [] as IObject[]
        }
    );

    return {
        objects,
        isLoading,
        isError,
        isSuccess,
    }
}