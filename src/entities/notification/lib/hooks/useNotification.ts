import { useQuery } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { INotificationWithoutUser } from "../../model/notificationWithoutUser.interface";
import { getNotificationByIdUser } from "../../api/getNotificationByIdUser";
import { useAppSelector } from "../../../../store";


interface IUseNotification {
    notifications: INotificationWithoutUser[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useNotification = (): IUseNotification => {
    const [token] = useLoacalStorage<string>('token');

    const { id_user } = useAppSelector(state => state.user);

    const { data: notifications, isLoading, isError } = useQuery<
        INotificationWithoutUser[], 
        Error, 
        INotificationWithoutUser[], 
        string
    >(
        'notifications', 
        () => getNotificationByIdUser('/notification/read/all', id_user, token!),
        {
            refetchInterval: 1000 * 60
        }
    );

    return {
        notifications,
        isLoading,
        isError,
    }
}