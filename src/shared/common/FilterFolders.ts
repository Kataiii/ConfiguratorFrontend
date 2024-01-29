import { IFolderProject } from "../../entities/Folder/FolderProject";

export class FilterFolders{
    static filterUserFolders = (folders: IFolderProject[]): IFolderProject[] => {
        const filterFolders = folders.filter(item => 
            item.name != "Неотсортированные" &&
            item.name != "Отправленные" &&
            item.name != "Корзина" &&
            item.name != "Архив"
        );
        return filterFolders;
    }

    static filterCompanyFolders = (folders: IFolderProject[]): IFolderProject[] => {
        const filterFolders = folders.filter(item => 
            item.name != "Неотсортированные" &&
            item.name != "На просчете" &&
            item.name != "Архив" &&
            item.name != "Корзина"
        );
        return filterFolders;
    }
}