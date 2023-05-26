import { makeAutoObservable } from "mobx";
import { IAccount } from "../entities/Account/IAccount";
import { ICreateCompany } from "../entities/User/Company";
import { ICreateUser } from "../entities/User/User";
import AuthService from "../services/AuthService";

export default class Store{
    acount = {} as IAccount;
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(isAuth: boolean){
        this.isAuth = isAuth;
    }

    setAccount(account : IAccount){
        this.acount = account;
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
        }catch(e: any){
            console.log(e.response?.data?.message);
        }
    }

    async registUser(createUserDto: ICreateUser){
        try{
            const response = await AuthService.registUser(createUserDto);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
        } catch(e: any){
            console.log(e.response?.data?.message);
        }
    }

    async registCompany(createCompanyDto: ICreateCompany){
        try{
            const response = await AuthService.registCompany(createCompanyDto);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
        } catch(e: any){
            console.log(e.response?.data?.message);
        }
    }

    async logout(){
        try{
            const  response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setAccount({} as IAccount);
        }catch(e: any){
            console.log(e.response?.data?.message);
        }
    }
}