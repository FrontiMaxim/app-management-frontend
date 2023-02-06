import { PropsListUsers } from './ListUsers.props';
import { ItemListUsers } from './ItemListUsers/ItemListUsers';
import cn from 'classnames';

export const ListUsers = ({ users, isChange, className }: PropsListUsers) => {

    return (
        <ul className={cn(className)}>
            {
                users.map(user => <ItemListUsers 
                                    key={user.id_user}
                                    data={user} 
                                    isChange={isChange} 
                                    />)
            }
        </ul>
    )
}
