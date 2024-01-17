import { Nullable } from "../Enums/Nullable";

export interface IEmployee{
    id: number;
    login: string;
    surname: string;
    name: string;
    pathronomyc: Nullable<string>;
    phone_number: string;
    company_id: number;
}