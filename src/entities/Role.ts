export interface IRole{
    id: number;
    name: string;
    AccountRoles: IAccountRoles;
}

export interface IAccountRoles{
    id: number;
    account_id: number;
    role_id: number;
}