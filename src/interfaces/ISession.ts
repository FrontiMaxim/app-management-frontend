export interface ISession {
    id_session: string; 
    date: string;
    time_start: string;
    time_end: string | null;
    id_user: string;
}