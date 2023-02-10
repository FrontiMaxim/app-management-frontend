import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { deleteObject } from "../../api/deleteObject";
import { AxiosResponse } from "axios";

type IUseDeleteObject = [
    mutate: UseMutateFunction<AxiosResponse<any, any>, unknown, string, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useDeleteObject = (): IUseDeleteObject => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((id_object: string) => {
        return deleteObject('/object/delete', id_object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}