import { IConstructionType } from "../../entities/ConstructionType";
import $api from "../../http/Index";



export default class ConstructionTypeService{
    static async getAllConstructionTypes(): Promise<IConstructionType[]>{
        return (await $api.get<IConstructionType[]>('/construction-types')).data;
    }
}