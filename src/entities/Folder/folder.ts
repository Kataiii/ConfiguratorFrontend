export interface IFolder{
    id : number;
    name : string;
    url : string;
    order : number;
    type : string;
}

//TODO убрать это
export class Folder{
    id : number;
    name : string;
    url : string;
    order : number;
    type : string;
    //translateName ...


    constructor(id : number, name : string, url : string, order : number, type : string){
        this.id = id;
        this.name = name;
        this.url = url;
        this.order = order;
        this.type = type;
    }
}