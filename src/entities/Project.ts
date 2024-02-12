import { Nullable } from "./Enums/Nullable";

export interface ICreateProjectDto{
    name: string;
    construction_type_id: number;
    floor_number: number;
    folder_id: number;
    role_id: number;
    file_project: File;
}

export interface IProjectInfo{
    id: number;
    name:string;
    preview?: string;
    folder_id: number;
    update_date?:Date;
}


export interface IProject{
    id : number;
    name : string;
    id_user : number;
    id_folder : number;
    status : string;
    create_date : Date;
    update_date : Date;
    preview : Nullable<any>;
}

//TODO убрать это
export class Project implements IProject{
    id: number;
    name: string;
    name_translate: Nullable<string>;
    id_user: number;
    id_folder: number;
    status: string;
    create_date: Date;
    update_date: Date;
    preview: any;
    
    constructor(id : number,
        name : string, 
        id_user : number,
        id_folder : number)

    constructor(id : number,
                name : string, 
                id_user : number,
                id_folder : number,
                name_translate ?: string)

    constructor(id : number, 
                name : string, 
                id_user : number,
                id_folder : number,
                name_translate ?: string,
                status ?: string,
                create_date ?: Date,
                update_date ?: Date,
                preview ?: any)
    {
        this.id = id;
        this.name = name;
        this.id_user = id_user;
        this.id_folder = id_folder;

        if(typeof name_translate !== 'undefined') this.name_translate = name_translate;
        else this.name_translate = name.toLowerCase();

        if(typeof status !== 'undefined') this.status = status;
        else this.status = 'статус';

        if(typeof create_date !== 'undefined') this.create_date = create_date;
        else this.create_date = new Date();

        if(typeof update_date !== 'undefined') this.update_date = update_date;
        else this.update_date = new Date();

        if(typeof preview !== 'undefined') this.preview = preview;
        else preview = null;
    }
}