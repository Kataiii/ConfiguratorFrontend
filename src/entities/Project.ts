export interface ICreateProjectDto {
    name: string;
    construction_type_id: number;
    floor_number: number;
    folder_id: number;
    role_id: number;
    file_project?: File;
    preview?: File;
}

export interface IProjectInfo {
    id?: number;
    name: string;
    preview?: string;
    folder_id: number;
    update_date?: Date;
}


export interface IProject {
    id: number;
    name: string;
    id_user: number;
    folder_id: number;
    status?: string;
    createdAt: Date;
    updatedAt: Date;
    preview?: string;
    save_file?: string;
}