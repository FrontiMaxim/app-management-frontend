import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IComment } from "../../model/comment.interface";
import { createComment } from "../../api/createComment";

type IUseCreateComment = [
    mutate: UseMutateFunction<IComment, unknown, IComment, unknown>,
    isLoading: boolean,
    isError: boolean
];


export const useCreateComment = (): IUseCreateComment => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation(
        (comment: IComment) => createComment('/comment/create', comment, token as string),
        {
            onSuccess() {
                queryClient.invalidateQueries('comments');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}