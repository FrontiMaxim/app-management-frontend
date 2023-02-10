import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IObject } from "../../model/object.interface";
import { updateObject } from "../../api/updateObject";

type IUseUpdateObject = [
    mutate: UseMutateFunction<unknown, unknown, IObject, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useUpdateObject = (): IUseUpdateObject => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((object: IObject) => {
        return updateObject('/object/update', object, token!);
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