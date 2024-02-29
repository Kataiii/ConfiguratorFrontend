import { AxiosResponse } from "axios";
import { AuthResponse } from "../../entities/Response/AuthResponse";
import { ICreateUser } from "../../entities/User/User";
import { ICreateCompany } from "../../entities/User/Company";
import axios from "axios";
import $api, { API_URL } from "../../http/Index";


export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        const response = await $api.post<AuthResponse>('/auth/login', {email, password});
        return response;
    }

    static async registUser(createUserDto: ICreateUser): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/auth/register/user', createUserDto);
    }

    static async registCompany(createCompanyDto: ICreateCompany): Promise<AxiosResponse<AuthResponse>>{
        const formData = new FormData();
        formData.append('email', createCompanyDto.email);
        formData.append('password', createCompanyDto.password);
        formData.append('company_name', createCompanyDto.company_name);
        formData.append('surname', createCompanyDto.surname);
        formData.append('name', createCompanyDto.name);
        formData.append('company_type_id', createCompanyDto.company_type_id.toString());
        formData.append('letter', createCompanyDto.files[0]);
        formData.append('inn', createCompanyDto.files[1]);
        formData.append('phone_number', createCompanyDto.phone_number);
        formData.append('is_spam', String(createCompanyDto.is_spam));

        console.log(formData.get('letter'));
        return axios.post<AuthResponse>(`${API_URL}/auth/register/company`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
    }

    static async logout(): Promise<void>{
        return $api.post('/auth/logout');
    }
}

