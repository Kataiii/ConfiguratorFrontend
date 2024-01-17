import { AxiosResponse } from "axios";
import { ICompany } from "../entities/User/Company";
import $api from "../http/Index";

export default class CompanyService{
    static async getCompanyById(id: number): Promise<AxiosResponse<ICompany>>{
        return $api.get<ICompany>(`/companies/${id}`);
    }
}