import { makeAutoObservable } from "mobx"
import { ICreateProjectDto, IProjectInfo } from "../entities/Project"
import ProjectService from "./services/ProjectService";

class ProjectStore {
    projects : IProjectInfo[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    getProjects = () => {
        return this.projects;
    }

    setProjects = (projects: IProjectInfo[]) => {
        this.projects = projects;
    }

    addNewProject = async(dto: ICreateProjectDto) => {
        const project = await ProjectService.createProjectWithoutFiles(dto);
        this.projects = [...this.projects, project];
        return project;
    }
}

export default ProjectStore;