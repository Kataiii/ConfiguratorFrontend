import { makeAutoObservable } from "mobx"
import { Folder } from "../entities/Folder/Folder";
import { Project } from "../entities/Project/Project"

class Projects {
    projects : Project[] = [
        new Project(1, 'Дом', 1, 1, 'house'),
        new Project(2, 'Дом1', 1, 1, 'house1'),
        new Project(3, 'Дом2', 1, 2, 'house2'),
        new Project(4, 'Дом3', 1, 2, 'house3'),
        new Project(5, 'Дом4', 1, 3, 'house4'),
        new Project(6, 'Дом5', 1, 4, 'house5')
    ];

    constructor() {
        makeAutoObservable(this)
    }

    apiGetAllProjectsForUser = () : Project[] => {
        //Запрос на получение всех проектов
        return this.projects;
    }

    apiGetProjectInFolder = (idFolder : number) : Project[] => {
        return this.projects.filter(item => item.id_folder === idFolder);
    }
}

export default new Projects()