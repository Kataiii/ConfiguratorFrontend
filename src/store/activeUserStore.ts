import { makeAutoObservable } from "mobx";
import { IRole } from "../entities/Role/IRole";
import { ICompany } from "../entities/User/Company";
import { IEmployee } from "../entities/User/Employee";
import { IUser } from "../entities/User/User";
import CompanyService from "../services/CompanyService";
import EmployeeService from "../services/EmployeeService";
import UserService from "../services/UserService";

export default class ActiveUserStore{
    user = {} as IUser | ICompany | IEmployee;
    roles = [] as IRole[];
    activeRole = {} as IRole;

    constructor(){
        makeAutoObservable(this);
    }

    setUser(user: IUser | ICompany | IEmployee){
        this.user = user;
    }

    setRoles(roles: IRole[]){
        this.roles = roles;
    }

    setActiveRole(activeRole: IRole){
        this.activeRole = activeRole;
    }

    async getActiveUser(id: number){
        let response;
        switch(this.activeRole.name){
            case 'company':
                response = await CompanyService.getCompanyById(id);
                this.setUser(response.data);
                break;
            case 'user':
                response = await UserService.getUserById(id);
                this.setUser(response.data);
                break;
            case 'company_user':
                response = await EmployeeService.getEmployeeById(id);
                this.setUser(response.data);
                break;
        }
        console.log('user', this.user);
    }
}