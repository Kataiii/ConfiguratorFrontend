import axios from "axios";
import { store } from "../..";
import { ICreateProjectDto, IProject } from "../../entities/Project";
import { ProjectResponse } from "../../entities/Response/CreateProjectResponse";
import $api, { API_URL } from "../../http/Index";


export default class ProjectService{
    static async createProject(dto: ICreateProjectDto): Promise<ProjectResponse>{
        const formData = new FormData();
        formData.append('name', dto.name);
        formData.append('construction_type_id', dto.construction_type_id.toString());
        formData.append('floor_number', dto.floor_number.toString());
        formData.append('folder_id', dto.folder_id.toString());
        formData.append('role_id', dto.role_id.toString());
        if(dto.file_project !== undefined) formData.append('file_project', dto.file_project);
        if(dto.preview !== undefined) formData.append('preview', dto.preview);

        return (await axios.post<ProjectResponse>(`${API_URL}/projects`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${store.getAccessToken()}`
            },
            withCredentials: true
        })).data;
    }

    static async createProjectWithoutFiles(dto: ICreateProjectDto): Promise<ProjectResponse>{
        return (await $api.post<ProjectResponse>(`${API_URL}/projects/project`, dto)).data;
    }

    static async getAllProjectsPagination(role_id: number, page: number, limit: number): Promise<ProjectResponse[]>{
        return (await $api.get<ProjectResponse[]>(`${API_URL}/projects/pagination/${role_id}`, {
            params: {
                page: page,
                limit: limit
            }
        })).data;
    }

    static async getProjectsByFolderPagination(folder_id: number, page: number, limit: number){

    }

    static async editProject(){

    }

    static async deleteProject(id: number){
        return (await $api.delete<IProject>('/projects'), { data: {id: id}}).data;
    }

    static async countAllProjects(role_id: number){
        return (await $api.get(`${API_URL}/projects/count/${role_id}`)).data;
    }

    static async countAllProjectsInFolder(folder_id: number){
        return (await $api.get(`${API_URL}/projects/count/folder/${folder_id}`)).data;
    }
}