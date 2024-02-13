export interface CreateProjectResponse{
    id: number;
    name: string;
    preview?: string;
    construction_type_id: number;
    floor_number: number;
    save_file?: string;
    folder_id: number;
}