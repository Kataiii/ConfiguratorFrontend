import axios from "axios";
import { store } from "../..";
import { ICreateProjectDto, IProject } from "../../entities/Project/Project";
import { CreateProjectResponse } from "../../entities/Response/CreateProjectResponse";
import $api, { API_URL } from "../../http/Index";


export default class ProjectService{
    static async createProject(dto: ICreateProjectDto): Promise<CreateProjectResponse>{
        const formData = new FormData();
        formData.append('name', dto.name);
        formData.append('construction_type_id', dto.construction_type_id.toString());
        formData.append('floor_number', dto.floor_number.toString());
        formData.append('folder_id', dto.folder_id.toString());
        formData.append('role_id', dto.role_id.toString());
        formData.append('file_project', dto.file_project);

        return await (await axios.post<CreateProjectResponse>(`${API_URL}/projects`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${store.getAccessToken()}`
            },
            withCredentials: true
        })).data;
    }
}