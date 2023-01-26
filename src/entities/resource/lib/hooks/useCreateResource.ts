import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { createResource } from "../../api/createResource";

type IUseCreateResource = [
    mutate: UseMutateFunction<FormData, unknown, params, unknown>,
    isLoading: boolean,
    isError: boolean
];

type params = {
    body: FormData,
    originalName: string, 
    storageName: string, 
    id_task: string
};

export const useCreateResource = (): IUseCreateResource => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation(
        ({body, originalName, storageName, id_task}: params) => {
        return createResource(
            '/resource/create', 
            body, 
            { id_resource: '', originalName, storageName, id_task }, 
            token as string
        );
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