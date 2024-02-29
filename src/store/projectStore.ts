import { makeAutoObservable } from "mobx"
import { ICreateProjectDto, IProject, IProjectInfo } from "../entities/Project"
import ProjectService from "./services/ProjectService";

class ProjectStore {
    projects : IProject[] = [];
    countProjects: number = 0;
    public limit: number = 19;
    private currentPage: number = 1; 
    public totalPage: number = 1;
    public sortFactor: string = 'По дате';
    public sortOrder: string = 'По убыванию';

    constructor() {
        makeAutoObservable(this)
    }

    getCurrentPage = () => {
        return this.currentPage;
    }

    setCurrentPage = (page: number) => {
        this.currentPage = page;
    }

    getProjects = () => {
        return this.projects;
    }

    getCountProjects = () => {
        return this.countProjects;
    }

    setProjects = (projects: IProject[]) => {
        this.projects = projects;
    }

    setCountProjects = (count: number) => {
        this.countProjects = count;
    }

    addNewProject = async(dto: ICreateProjectDto, user_id: number) => {
        const project = await ProjectService.createProjectWithoutFiles(dto);
        const new_project: IProject = {
            id: project.id,
            name: project.name,
            id_user: user_id,
            folder_id: project.folder_id,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
            preview: project.preview ?? undefined,
            save_file: project.save_file ?? undefined
        }
        this.projects = [...this.projects, new_project];
        return project;
    }
}

export default ProjectStore;