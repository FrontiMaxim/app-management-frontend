import { IUser } from "../../../interfaces/IUser";
import { IPropsList } from "../common/IPropsList";

export interface IPropsItemListUsers extends IPropsList{
    user: IUser;
}