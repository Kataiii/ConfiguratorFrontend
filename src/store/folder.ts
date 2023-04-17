import { makeAutoObservable } from "mobx"
import { Folder } from "../entities/Folder/folder"
import axios from "axios"

class Folders{
    folders : Folder[] = [
        new Folder(1, "Дом", '/home/projects/folders/house', 1, 'projects'),
        new Folder(2, "Офис", '/home/projects/folders/office', 2, 'projects'),
        new Folder(3, "Дом1", '/home/projects/folders/house1', 3, 'projects'),
        new Folder(4, "Офис1", '/home/projects/folders/office1', 4, 'projects'),
        new Folder(5, "Дом2", '/home/projects/folders/house2', 5, 'projects'),
        new Folder(5, "Дом2", '/home/renders/folders/house3', 5, 'renders')
    ];

    constructor() {
        makeAutoObservable(this)
    }

    apiGetFolders = () => {
        //Запрос на получение папок, возможно сделать сортировку, удалив постоянные
        return this.folders;
    }

    apiSetFolders = (folders : Folder[]) => {
        //Запрос на изменение 
        //Скорее не запрос, а положить в localStorage, чтобы не перегружать бек
        this.folders = folders;
    }

    splitForBreadcrumd = (defaultFolders : Record<string, string | null>) : Record<string, string | null> => {
        let mapRoutes : Record<string, string | null> = defaultFolders;
        let tmp : string = '';
        this.folders.map(item =>{
            tmp = item.url.slice(item.url.lastIndexOf('/'));
            mapRoutes[tmp] = item.name
        })
        return mapRoutes;
    }
}

export default new Folders()