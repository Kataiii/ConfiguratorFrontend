import axios from "axios";
import { useContext } from "react";
import { Context, store } from "..";
import { AuthResponse } from "../entities/Response/AuthResponse";

//TODO проверить работает ли
export const API_URL = 'http://localhost:5000';
export const FRONT_URL = 'http://localhost:3000';


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.getAccessToken()}`;
    config.headers.Accept = 'application/json';
    return config;
});

$api.interceptors.response.use((config) => {
    return config;
}, (async error => {
    const origrnalRequest = error.config;
    if(error.responce.status == 401 && error.config && !error.config._isRetry){
        origrnalRequest._isRetry = true;
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});
            store.setAccount(response.data.account);
            store.setAccessToken(response.data.accessToken);
            store.setAuth(true);
            return $api.request(origrnalRequest);
        } catch(e){
            console.log('Не авторизован');
        }
    }
    throw error;
}))

export default $api;