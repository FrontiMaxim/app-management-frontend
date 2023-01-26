import { useQuery } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IResource } from "../../model/resource.interface";
import { getResourcesByIdTask } from "../../api/getResourcesByIdTask";

interface IUseResource {
    resources: IResource[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useResource = (id_task: string): IUseResource => {
    const [token] = useLoacalStorage<string>('token');

    const { data: resources, isLoading, isError } = useQuery<IResource[], Error, IResource[], string>(
        'resources', 
        () => getResourcesByIdTask('/resource/read/resources', id_task, token as string)
    );

    return {
        resources,
        isLoading,
        isError,
    }
}