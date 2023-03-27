export interface INotification {
    id_notification?: string;
    is_watch: boolean;    
    data: Date;
    type: string;
    id_user: string;
    id_task: string;
}