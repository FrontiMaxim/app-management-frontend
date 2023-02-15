import React, { RefObject, useEffect, useRef } from 'react';
import styles from './ListComment.module.scss';
import { PropsListComment } from './ListComment.props';
import { useComment } from '../../lib/hooks/useComment';
import { Comment } from '../Comment/Comment';
import cn from 'classnames'
import Empty from '../../../../shared/components/Empty/Empty';


export const ListComment = ({ task, idCurrentUser, className }: PropsListComment) => {

    const { comments } = useComment(task.id_task);

    let refComments = useRef() as RefObject<HTMLDivElement> | null;
    

    useEffect(() => {
       if(refComments) {
        refComments.current!.scrollTop = refComments.current!.scrollHeight;
       }
    }, [comments]);

    return (
        <div ref={refComments} className={cn(styles.list, className)} >
            {
                comments &&
                comments.length === 0 ? <Empty text='Комментариев нет...' />
                :
                comments?.map(comment => <Comment key={comment.id_comment}
                                            comment={comment}
                                            myself={comment.user.id_user === idCurrentUser}
                                         />)
            }
        </div>
    )
}
