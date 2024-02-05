import { ICreateFolderDto, IFolderProject, IUpdateFolderDto } from "../../entities/Folder/FolderProject";
import $api from "../../http/Index";


export default class FolderProjectService{
    static async getFolderByAccountRoleId(role_id: number): Promise<IFolderProject[]>{
        return (await $api.get<IFolderProject[]>(`/folder-projects/role/${role_id}`)).data;
    }

    static async addFolder(dto: ICreateFolderDto): Promise<IFolderProject>{
        return (await $api.post<IFolderProject>(`/folder-projects`, dto)).data;
    }

    static async editFolder(dto: IUpdateFolderDto): Promise<IFolderProject>{
        return (await $api.patch<IFolderProject>(`/folder-projects`, dto)).data;
    }

    static async deleteFolder(id: number): Promise<IFolderProject>{
        return (await $api.delete<IFolderProject>(`/folder-projects`, {data: {id: id}})).data;
    }
}