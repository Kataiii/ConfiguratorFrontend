import { makeAutoObservable } from "mobx";
import { IAccount } from "../entities/Account/Account";
import { ICreateCompany } from "../entities/User/Company";
import { ICreateUser } from "../entities/User/User";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../entities/Response/AuthResponse";
import { API_URL } from "../http";

export default class Store{
    acount = {} as IAccount;
    isAuth = false;
    accessToken = '';
    isFailAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(isAuth: boolean){
        this.isAuth = isAuth;
    }

    setAccount(account : IAccount){
        this.acount = account;
    }

    setAccessToken(accessToken: string){
        this.accessToken = accessToken;
    }

    setFailAuth(isFail: boolean){
        this.isFailAuth = isFail;
    }

    async login(email: string, password: string): Promise<IAccount | number>{
        try{
            const response = await AuthService.login(email, password);
            this.setAccessToken(response.data.accessToken);
            localStorage.setItem('token', this.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
            return response.data.account;
        }catch(e: any){
            console.log(e.response?.data?.message);
            return e.response?.status;
        }
    }

    async registUser(createUserDto: ICreateUser): Promise<IAccount | number>{
        try{
            const response = await AuthService.registUser(createUserDto);
            this.setAccessToken(response.data.accessToken);
            localStorage.setItem('token', this.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
            return response.data.account;
        } catch(e: any){
            console.log(e.response?.data?.message);
            return e.response?.status;
        }
    }

    async registCompany(createCompanyDto: ICreateCompany): Promise<IAccount | number>{
        try{
            const response = await AuthService.registCompany(createCompanyDto);
            this.setAccessToken(response.data.accessToken);
            localStorage.setItem('token', this.accessToken);
            this.setAuth(true);
            this.setAccount(response.data.account);
            return response.data.account;
        } catch(e: any){
            return e.response?.status;
        }
    }

    async logout(){
        try{
            const  response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAccessToken('');
            this.setAuth(false);
            this.setAccount({} as IAccount);
        }catch(e: any){
            console.log(e.response?.data?.message);
        }
    }

    async recoveryPassword(email: string){
        try{
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/recovery`, { email: email }, {withCredentials: true})
            return response;
        } catch(e: any) {
            return e.response?.status;
        }
    }

    async resetPassword(password: string, link: string){
        try{
            const response = await axios.post<AuthResponse>(`${API_URL}/recovery-links/recovery/${link}`,
                { password: password},
                {withCredentials: true});
            return response;
        } catch(e: any) {
            return e.response?.status;
        }
    }

    async refresh(){
        const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});
        this.setAccessToken(response.data.accessToken);
        this.setAccount(response.data.account);
        localStorage.setItem('token', response.data.accessToken);
        this.setAuth(true);
    }
}