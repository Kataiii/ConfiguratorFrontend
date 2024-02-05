import { makeAutoObservable } from "mobx"
import { ICreateFolderDto, IFolderProject, IUpdateFolderDto } from "../entities/Folder/FolderProject";
import { IFolderRender } from "../entities/Folder/FolderRender";
import FolderProjectService from "./services/FolderProjectServeice";


class Folders{
    activeFolder: IFolderProject | IFolderRender | null = null;
    foldersProjects : IFolderProject[] = [];
    foldersRenders : IFolderRender[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    setActiveFolder = (folder: IFolderProject | IFolderRender | null) => {
        this.activeFolder = folder;
    }

    setFoldersProject = (folders: IFolderProject[]) => {
        this.foldersProjects = folders;
    }

    setFolderRenders = (folders: IFolderRender[]) => {
        this.foldersRenders = folders;
    }

    getAciveFolder = () => {
        return this.activeFolder;
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

    updateFolderName = async(id: number, name: string) => {
        this.foldersProjects = this.foldersProjects.map(item => {
            if(item.id === id) item.name = name;
            return item;
        });
        return await FolderProjectService.editFolder({id: id, name: name} as IUpdateFolderDto);
    }

    deleteFolder = async(id: number) => {
        this.foldersProjects = this.foldersProjects.filter(item => item.id != id);
        return await FolderProjectService.deleteFolder(id);
    }

    findIdFolderByUrl = (urlFolder : string) : number => {
        return this.foldersProjects.filter(item => item.name === urlFolder)[0].id;
    }
}

export default Folders;