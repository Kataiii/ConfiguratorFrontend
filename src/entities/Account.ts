import { IRole } from "./Role";

export interface IAccount{
    id: number;
    email: string;
    is_checked_email: boolean;
    city_id: number;
    is_spam: number;
    profile_picture: string;
    createdAt: Date;
    roles: IRole[];
}