export class ConvertionDate{
    static convertionDateForProject(date : Date) : string {
        let str : string = '';
        str = this.ConvertionNumber(date.getDate()) + '.' + 
               this.ConvertionNumber(date.getMonth() + 1) + '.' + 
                date.getFullYear().toString() + ' ' +
                date.getHours().toString() + ':' +
               date.getMinutes().toString();
        return str;
    }

    static ConvertionNumber(number : number) : string {
        if(Math.round(number / 10) === 0) return '0'+number;
        return number.toString();
    }
}