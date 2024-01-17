import { IAccount } from "../Account/Account";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    account: IAccount;
}