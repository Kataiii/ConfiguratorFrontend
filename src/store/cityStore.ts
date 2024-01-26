import { makeAutoObservable } from "mobx";
import { ICity } from "../entities/City/City";
import CityService from "./services/CityService";

class CityStore{
    cities: ICity[] = [];

    constructor(){
        makeAutoObservable(this);
        this.getCitiesFromBack();
    }

    getCities = (): ICity[] => {
        return this.cities;
    }

    setCities = (cities: ICity[]) => {
        this.cities = cities;
    }

    getCitiesFromBack = async() => {
        const response = await CityService.getAllCities();
        this.cities = response;
    }

    getCityById = (id: number): ICity | undefined => {
        return this.cities.find(item => item.id == id);
    }

    getCityByIdFromBack = async(id: number) => {
        return await CityService.getCityById(id);
    }
}

export default CityStore;