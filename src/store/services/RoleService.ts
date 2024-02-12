import { IRole } from "../../entities/Role";
import $api from "../../http/Index";

export default class RoleService{
    static async getRoleByName(name:string): Promise<IRole>{
        return (await $api.get<IRole>(`/roles/name/${name}`)).data;
    }
}