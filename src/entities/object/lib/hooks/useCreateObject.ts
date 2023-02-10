import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IObject } from "../../model/object.interface";
import { createObject } from "../../api/createObject";
import { AxiosResponse } from "axios";

type IUseCreateObject = [
    mutate: UseMutateFunction<AxiosResponse<any, any>, unknown, IObject, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useCreateObject = (): IUseCreateObject => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((object: IObject) => {
        return createObject('/object/create', object, token!);
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