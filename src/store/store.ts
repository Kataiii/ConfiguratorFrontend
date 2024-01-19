import { makeAutoObservable } from "mobx";
import { IAccount } from "../entities/Account/Account";
import { ICreateCompany } from "../entities/User/Company";
import { ICreateUser } from "../entities/User/User";
import AuthService from "./services/AuthService";
import axios from "axios";
import { AuthResponse } from "../entities/Response/AuthResponse";
import { API_URL } from "../http/Index";
import { IRole } from "../entities/Role/Role";
import { IAuthDto } from "../entities/Dto/AuthDto";

class Store {
    private acount: IAccount = {} as IAccount;
    private accessToken: string = '';
    private activeRole: IRole = {} as IRole;
    private isAuth: boolean = false;
    private isFailAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getAuth = (): boolean => {
        return this.isAuth;
    }

    setAuth = (isAuth: boolean) => {
        this.isAuth = isAuth;
    }

    getAccount = (): IAccount => {
        return structuredClone(this.acount);
    }

    setAccount = (account: IAccount) => {
        this.acount = account;
    }

    getAccessToken = (): string => {
        return this.accessToken;
    }

    setAccessToken = (accessToken: string) => {
        this.accessToken = accessToken;
    }

    getFailAuth = (): boolean => {
        return this.isFailAuth;
    }

    setFailAuth = (isFail: boolean) => {
        this.isFailAuth = isFail;
    }

    getActiveRole = (): IRole => {
        return structuredClone(this.activeRole);
    }

    setActiveRole(role: IRole) {
        this.activeRole = role;
    }

    login = async (authDto: IAuthDto): Promise<IAccount | number> => {
        try {
            const response = await AuthService.login(authDto.email, authDto.password);
            this.setStateStore(response.data);
            return this.getAccount();
        } catch (e: any) {
            return e.response?.status;
        }
    }

    registUser = async (createUserDto: ICreateUser): Promise<IAccount | number> => {
        try {
            const response = await AuthService.registUser(createUserDto);
            this.setStateStore(response.data);
            return response.data.account;
        } catch (e: any) {
            return e.response?.status;
        }
    }

    registCompany = async (createCompanyDto: ICreateCompany): Promise<IAccount | number> => {
        try {
            const response = await AuthService.registCompany(createCompanyDto);
            this.setStateStore(response.data);
            return response.data.account;
        } catch (e: any) {
            return e.response?.status;
        }
    }

    logout = async () => {
        try {
            const response = await AuthService.logout();
            this.setAccessToken('');
            this.setAuth(false);
            this.setFailAuth(false);
            this.setAccount({} as IAccount);
        } catch (e: any) {
            return e.response?.status;
        }
    }

    //TODO проверить метод
    recoveryPassword = async (email: string) => {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/recovery`, { email: email }, { withCredentials: true })
            return response;
        } catch (e: any) {
            return e.response?.status;
        }
    }

    //TODO проверить метод
    resetPassword = async (password: string, link: string) => {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/recovery-links/recovery/${link}`,
                { password: password },
                { withCredentials: true });
            return response;
        } catch (e: any) {
            return e.response?.status;
        }
    }

    refresh = async () => {
        const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, { withCredentials: true });
        this.setStateStore(response.data);
    }

    private setStateStore = (state: AuthResponse) => {
        this.setAccount(state.account);
        this.setAccessToken(state.accessToken);
        this.setAuth(true);
        this.setFailAuth(false);

        if (this.acount.roles.length == 1) this.setActiveRole(this.acount.roles[0]);
    }
}

export default Store;