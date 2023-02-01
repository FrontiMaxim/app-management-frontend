import axios from "axios";
import { IDataAuthentication } from "../model/authenticate.interface";

export const authentication = async (url: string, body: IDataAuthentication) => {

    const { data: { token } } = await axios.post(url, body);

    return token;
}