import React from 'react';
import styles from './ListComment.module.scss';
import { PropsListComment } from './ListComment.props';
import { useComment } from '../../lib/hooks/useComment';
import { Comment } from '../Comment/Comment';


export const ListComment = ({ task }: PropsListComment) => {

    const { comments } = useComment(task.id_task);

    return (
        <div className={styles.list}>
            {
                comments?.map(comment => <Comment key={comment.id_comment}
                                            comment={comment}
                                            myself={comment.user.id_user === 'f88a6b32-9d48-4859-870a-c5775dce8d5f'}
                                         />)
            }
        </div>
    )
}
