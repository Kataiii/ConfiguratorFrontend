import { makeAutoObservable } from "mobx"
import { Folder } from "../entities/Folder/Folder"
import axios from "axios"

class Folders{
    folders : Folder[] = [
        new Folder(1, "Дом", '/home/projects/folders/house', 1, 'projects'),
        new Folder(2, "Офис", '/home/projects/folders/office', 2, 'projects'),
        new Folder(3, "Дом1", '/home/projects/folders/house1', 3, 'projects'),
        new Folder(4, "Офис1", '/home/projects/folders/office1', 4, 'projects'),
        new Folder(5, "Дом2", '/home/projects/folders/house2', 5, 'projects'),
        new Folder(6, "Дом2", '/home/renders/folders/house3', 5, 'renders'),
        new Folder(7, "Неотсортированные", '/home/projects/folders/unsorted', 6, 'projects'),
        new Folder(8, "Входящие", '/home/projects/folders/incoming', 7, 'projects'),
        new Folder(9, "Отправленные", '/home/projects/folders/sent', 8, 'projects'),
        new Folder(10, "Архив", '/home/projects/folders/archive', 9, 'projects'),
        new Folder(11, "Корзина", '/home/projects/folders/basket', 10, 'basket')
    ];

    constructor() {
        makeAutoObservable(this)
    }

    apiGetFolders = () => {
        //Запрос на получение папок, возможно сделать сортировку, удалив постоянные
        return this.folders.filter(item => item.name !== 'Неотсортированные' && 
                                    item.name !== 'Входящие' &&
                                    item.name !== 'Отправленные' &&
                                    item.name !== 'Архив' &&
                                    item.name !== 'Корзина');
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

    findIdFolderByUrl = (urlFolder : string) : number => {
        return this.folders.filter(item => item.url === urlFolder)[0].id;
    }
}

export default new Folders()