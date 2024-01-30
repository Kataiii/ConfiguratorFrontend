import { makeAutoObservable } from "mobx"
import { ICreateFolderDto, IFolderProject } from "../entities/Folder/FolderProject";
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

    addFolderProject = async(dto: ICreateFolderDto): Promise<IFolderProject> => {
        return await FolderProjectService.addFolder(dto);
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