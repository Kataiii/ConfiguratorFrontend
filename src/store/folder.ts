import { makeAutoObservable } from "mobx"
import { Folder } from "../entities/Folder/folder"
import axios from "axios"

class Folders{
    folders : Folder[] = [
        new Folder("Дом", '/home/projects/folders/house'),
        new Folder("Офис", '/home/projects/folders/office')
    ];

    constructor() {
        makeAutoObservable(this)
    }

    apiGetFolders = () => {
        //Запрос на получение папок, возможно сделать сортировку, удалив постоянные
        return this.folders;
    }
}

export default new Folders()