import { AxiosResponse } from "axios";
import { ICity } from "../entities/City/City";
import $api from "../http/Index";


export default class CityService{
    static async getCityById(id: number): Promise<AxiosResponse<ICity>>{
        return $api.get<ICity>(`/cities/${id}`);
    }

    static async getAllCities(): Promise<AxiosResponse<ICity[]>>{
        return $api.get<ICity[]>('/cities');
    }
}