import axios from "axios";
import { useContext } from "react";
import { Context } from "..";
import { AuthResponse } from "../entities/Response/AuthResponse";

//TODO проверить работает ли
export const API_URL = process.env.API_URL;


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

//TODO поменять на store все localStorage
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
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
            const {store} = useContext(Context);
            store.setAccessToken(response.data.accessToken);
            localStorage.setItem('token', response.data.accessToken);
            store.setAuth(true);
            return $api.request(origrnalRequest);
        } catch(e){
            console.log('Не авторизован');
        }
    }
    throw error;
}))

export default $api;