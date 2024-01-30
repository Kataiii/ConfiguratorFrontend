import { ICreateFolderDto, IFolderProject } from "../../entities/Folder/FolderProject";
import $api from "../../http/Index";


export default class FolderProjectService{
    static async getFolderByAccountRoleId(role_id: number): Promise<IFolderProject[]>{
        return (await $api.get<IFolderProject[]>(`/folder-projects/role/${role_id}`)).data;
    }

    static async addFolder(dto: ICreateFolderDto): Promise<IFolderProject>{
        console.log('111111111111111');
        console.log(dto);
        return (await $api.post<IFolderProject>(`/folder-projects`, dto)).data;
    }
}