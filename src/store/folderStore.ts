import { makeAutoObservable } from "mobx"
import { IFolderProject } from "../entities/Folder/FolderProject";
import { IFolderRender } from "../entities/Folder/FolderRender";
import FolderProjectService from "./services/FolderProjectServeice";


class Folders{
    foldersProjects : IFolderProject[] = [];
    foldersRenders : IFolderRender[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setFoldersProject = (folders: IFolderProject[]) => {
        this.foldersProjects = folders;
    }

    setFolderRenders = (folders: IFolderRender[]) => {
        this.foldersRenders = folders;
    }

    getFoldersProjectByBack = async (role_id: number) => {
        return await FolderProjectService.getFolderByAccountRoleId(role_id);
    }

    getFoldersProject = () => {
        return this.foldersProjects;
    }

    getFoldersRender = () => {
        return this.foldersRenders;
    }

    apiGetFolders = () => {
        //Запрос на получение папок, возможно сделать сортировку, удалив постоянные
        return this.foldersProjects.filter(item => item.name !== 'Неотсортированные' && 
                                    item.name !== 'Входящие' &&
                                    item.name !== 'Отправленные' &&
                                    item.name !== 'Архив' &&
                                    item.name !== 'Корзина');
    }


    splitForBreadcrumd = (defaultFolders : Record<string, string | null>) : Record<string, string | null> => {
        let mapRoutes : Record<string, string | null> = defaultFolders;
        let tmp : string = '';
        this.foldersProjects.map(item =>{
            tmp = item.name.slice(item.name.lastIndexOf('/'));
            mapRoutes[tmp] = item.name
        })
        return mapRoutes;
    }

    findIdFolderByUrl = (urlFolder : string) : number => {
        return this.foldersProjects.filter(item => item.name === urlFolder)[0].id;
    }
}

export default Folders;