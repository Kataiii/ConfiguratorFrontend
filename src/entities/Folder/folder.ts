export class Folder{
    id : number;
    name : string;
    url : string;
    order : number;
    //translateName ...


    constructor(id : number, name : string, url : string, order : number){
        this.id = id;
        this.name = name;
        this.url = url;
        this.order = order;
    }
}