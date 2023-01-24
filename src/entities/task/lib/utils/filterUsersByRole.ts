import { IUser } from "../../../user";

export const filterUsersByRole = (users: IUser[], ...roles: string[]): IUser[]  =>  {
    return users.filter(user => roles.includes(user.role));
}