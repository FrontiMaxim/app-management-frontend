import { IPropsListUsers } from './IListUsers'
import { ItemListUsers } from './ItemListUsers/ItemListUsers'

export const ListUsers = ({ users, isChange }: IPropsListUsers) => {

    return (
        <ul>
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
