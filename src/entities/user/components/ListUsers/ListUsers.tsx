import { PropsListUsers } from './ListUsers.props';
import { ItemListUsers } from './ItemListUsers/ItemListUsers';
import cn from 'classnames';
import styles from './ListUsers.module.scss';

export const ListUsers = ({ users, isChange, className }: PropsListUsers) => {

    return (
        <ul className={cn(styles.list, className)}>
            {
                !users.length && <div className={styles.empty}>Никого нет...</div>
            }
            {
                users.map(user => <ItemListUsers 
                                    key={user.id_user}
                                    user={user} 
                                    isChange={isChange} 
                                    />)
            }
        </ul>
    )
}
