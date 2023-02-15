import { useQuery } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IComment } from "../../model/comment.interface";
import { getCommentsByIdTask } from "../../api/getCommentsByIdTask";

interface IUseComment {
    comments: IComment[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useComment = (id_task: string): IUseComment => {
    const [token] = useLoacalStorage<string>('token');

    const { data: comments, isLoading, isError } = useQuery<IComment[], Error, IComment[], string>(
        'comments', 
        () => getCommentsByIdTask('/comment/read/comments', id_task, token as string),
        {
            refetchInterval: 1000 * 30
        }
    );

    return {
        comments,
        isLoading,
        isError,
    }
}