import { AxiosResponse } from "axios";
import { IUser } from "../../entities/User/User";
import $api from "../../http/Index";

export default class UserService{
    static async getUserById(id: number): Promise<IUser>{
        const user = await (await $api.get<IUser>(`/users/${id}`)).data;
        return user;
    }
}