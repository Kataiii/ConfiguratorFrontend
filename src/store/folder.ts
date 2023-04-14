import { makeAutoObservable } from "mobx"
import { Folder } from "../entities/Folder/folder"
import axios from "axios"

class Folders{
    folders : Folder[] = [
        new Folder(1, "Дом", '/home/projects/folders/house', 1),
        new Folder(2, "Офис", '/home/projects/folders/office', 2),
        new Folder(3, "Дом1", '/home/projects/folders/house1', 3),
        new Folder(4, "Офис1", '/home/projects/folders/office1', 4),
        new Folder(5, "Дом2", '/home/projects/folders/house2', 5)
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
        this.folders = folders;
    }
}

export default new Folders()