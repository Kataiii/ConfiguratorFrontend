import { AxiosResponse } from "axios";
import { IEmployee } from "../../entities/User/Employee";
import $api from "../../http/Index";


export default class EmployeeService{
    static async getEmployeeById(id: number): Promise<AxiosResponse<IEmployee>>{
        return $api.get<IEmployee>(`/employees/${id}`);
    }
}