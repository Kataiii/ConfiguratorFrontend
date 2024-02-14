import { Nullable } from "../Enums/Nullable";

export interface ProjectResponse{
    id: number;
    name: string;
    folder_id: number;
    createdAt: Date;
    updatedAt: Date;
    preview: Nullable<string>;
    save_file: Nullable<string>;
    floor_number: number;
    construction_type_id: number;
}