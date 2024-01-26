import { AxiosResponse } from "axios";
import { ICity } from "../../entities/City/City";
import $api from "../../http/Index";


export default class CityService{
    static async getCityById(id: number): Promise<ICity>{
        return await (await $api.get<ICity>(`/cities/${id}`)).data ;
    }

    static async getAllCities(): Promise<ICity[]>{
        return await (await $api.get<ICity[]>('/cities')).data;
    }
}