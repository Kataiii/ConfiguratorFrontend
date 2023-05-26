import { IAccount } from "../Account/IAccount";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    account: IAccount;
}