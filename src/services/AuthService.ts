import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../entities/Response/AuthResponse";
import { ICreateUser } from "../entities/User/User";
import { ICreateCompany } from "../entities/User/Company";


export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/auth/login', {email, password});
    }

    static async registUser(createUserDto: ICreateUser): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/auth/register/user', createUserDto);
    }

    static async registCompany(createCompanyDto: ICreateCompany): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/auth/register/company', createCompanyDto);
    }

    static async logout(): Promise<void>{
        return $api.post('/auth/logout');
    }
}

