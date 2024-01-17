import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IAccount} from "../../entities/Account/Account";
import { IRole } from "../../entities/Role/Role";

interface IInitialStateProps{
    account: IAccount;
    accessToken: string;
}

interface IInitialState {
    loading: boolean;
    account: IAccount | null;
    accessToken: string;
    activeRole: IRole | null;
    success: boolean;
}

export const initialState: IInitialState = {
    loading: false,
    account: null,
    accessToken: '',
    activeRole: null,
    success: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        setState: (state, action: PayloadAction<IInitialStateProps>) => {
            state.accessToken = action.payload.accessToken;
            state.account = action.payload.account;
        }
    }
});

export default authSlice.reducer;

export const {logout, setState} = authSlice.actions;