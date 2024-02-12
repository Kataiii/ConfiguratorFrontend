import { IAccount } from "../Account";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    account: IAccount;
}