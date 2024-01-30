export interface IFolderProject{
    id : number;
    name : string;
    account_id: number;
    role_id: number;
}

export interface ICreateFolderDto{
    name : string;
    account_id: number;
    role_id: number;
}