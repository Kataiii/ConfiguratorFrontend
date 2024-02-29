import { makeAutoObservable } from "mobx"
import { ICreateFolderDto, IFolderProject, IUpdateFolderDto } from "../entities/Folder/FolderProject";
import { IFolderRender } from "../entities/Folder/FolderRender";
import FolderProjectService from "./services/FolderProjectServeice";


class Folders {
    activeFolder: IFolderProject | IFolderRender | null = null;
    foldersProjects: IFolderProject[] = [];
    foldersRenders: IFolderRender[] = [];

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

    addFolderProjectRequest = async (dto: ICreateFolderDto): Promise<IFolderProject> => {
        return await FolderProjectService.addFolder(dto);
    }

    //TODO пока так, потом исправить на что-то более логичное
    updateFolderName = async (id: number, name: string) => {
        if (name.match(new RegExp(`_[0-9]+$`, "gu")) != null) {
            name = name.substring(0, name.lastIndexOf("_"));
        }

        const dublicates: IFolderProject[] = this.findFolderDublicate(name);
        let newName: string = '';
        if(dublicates.length > 0) newName = this.createNewNameForDublicate(name);
        else newName = name;

        this.foldersProjects = this.foldersProjects.map(item => {
            if (item.id === id) item.name = newName;
            return item;
        });
        return await FolderProjectService.editFolder({ id: id, name: newName } as IUpdateFolderDto);
    }

    deleteFolder = async (id: number) => {
        this.foldersProjects = this.foldersProjects.filter(item => item.id != id);
        return await FolderProjectService.deleteFolder(id);
    }

    findIdFolderByUrl = (urlFolder: string): number => {
        return this.foldersProjects.filter(item => item.name === urlFolder)[0].id;
    }

    findFolderByRegExp = (regex: RegExp): IFolderProject[] => {
        return this.foldersProjects.filter(item => {
            if (item.name.match(regex) != null) {
                return item;
            }
        });
    }

    findFolderDublicate = (folderName: string) => {
        let regex: RegExp = new RegExp(`^${folderName}_[0-9]+$`, "gu");
        let folders: IFolderProject[] = this.findFolderByRegExp(regex);
        return folders;
    }

    createMapFolders = (folders: IFolderProject[]): Map<number, IFolderProject> => {
        let mapFolders = new Map<number, IFolderProject>();
        folders.forEach(folder => {
            let index: number = Number(folder.name.substring(folder.name.lastIndexOf("_") + 1));
            mapFolders.set(index, folder);
        });
        return mapFolders;
    }

    addFolder = async (dto: ICreateFolderDto): Promise<IFolderProject> => {
        const folder: IFolderProject = await this.addFolderProjectRequest(dto);
        this.setFoldersProject([...this.getFoldersProject(), folder]);
        return folder;
    }

    createNewNameForDublicate = (folderName: string): string => {
        if (folderName.match(new RegExp(`_[0-9]+$`, "gu")) != null) {
            folderName = folderName.substring(0, folderName.lastIndexOf("_"));
        }

        const dublicates: IFolderProject[] = this.findFolderDublicate(folderName);
        let index = 1;
        if (dublicates.length > 0) {
            const map = new Map([...Array.from(this.createMapFolders(dublicates).entries())].sort((a, b) => a[0] - b[0]));
            const arrayFolders = Array.from(map, ([key, folder]) => ({ key, folder }));

            index = Number(arrayFolders[arrayFolders.length - 1].key) + 1;
        }

        return `${folderName}_${index}`;
    }

    dublicateFolder = async (folderId:number, folderName: string, account_id: number, role_id?: number) => {
        const newName = this.createNewNameForDublicate(folderName);
        //TODO копирование проектов, связанных с этой папкой
        const folder = await this.addFolder({ name: newName, account_id: account_id, role_id: role_id } as ICreateFolderDto);
        
    }
}

export default Folders;