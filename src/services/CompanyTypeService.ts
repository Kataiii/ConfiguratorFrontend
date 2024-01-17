import { AxiosResponse } from "axios";
import { ICompanyType } from "../entities/Company/CompanyTypes";
import $api from "../http/Index";


export default class CompanyTypesService{
    static async getAllTypes(): Promise<AxiosResponse<ICompanyType[]>>{
        return $api.get<ICompanyType[]>('/company-types');
    }
}