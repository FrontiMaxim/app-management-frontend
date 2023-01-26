import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { deleteResource } from "../../api/deleteResource";

type IUseDeleteResource = [
    mutate: UseMutateFunction<any, unknown, string, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useDeleteResource = (): IUseDeleteResource => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((id_resource: string) => {
        return deleteResource('/resource/delete', id_resource, token as string);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('resources');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}