import { IFolderProject } from "../../entities/Folder/FolderProject";
import $api from "../../http/Index";


export default class FolderProjectService{
    static async getFolderByAccountRoleId(role_id: number): Promise<IFolderProject[]>{
        return await (await $api.get<IFolderProject[]>(`/folder-projects/role/${role_id}`)).data;
    }
}