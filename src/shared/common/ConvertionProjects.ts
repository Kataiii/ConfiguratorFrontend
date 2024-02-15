import { IProject } from "../../entities/Project";
import { ProjectResponse } from "../../entities/Response/CreateProjectResponse";

export class ConvertionProjects{
    static convertInProject(response: ProjectResponse[], user_id: number): IProject[]{
        let projects: IProject[] = [];

        response.map(item => {
            projects.push({
                id: item.id,
                name: item.name,
                id_user: user_id,
                folder_id: item.folder_id,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                preview: item.preview ?? undefined,
                save_file: item.save_file ?? undefined
            });
        })

        return projects;
    }
}