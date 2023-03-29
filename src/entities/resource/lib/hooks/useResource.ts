import { useQuery } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { getResourcesByIdTask } from "../../api/getResourcesByIdTask";
import { IResourceWithDateAndUser } from "../../model/resourceWithDateAndUser";

interface IUseResource {
    resources: IResourceWithDateAndUser[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useResource = (id_task: string): IUseResource => {
    const [token] = useLoacalStorage<string>('token');

    const { data: resources, isLoading, isError } = useQuery<
        IResourceWithDateAndUser[], 
        Error, IResourceWithDateAndUser[], 
        string
    >(
        'resources', 
        () => getResourcesByIdTask('/resource/read/resources', id_task, token!),
        {
            refetchInterval: 1000 * 60
        }
    );

    return {
        resources,
        isLoading,
        isError,
    }
}