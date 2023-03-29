export const INVALID_PASSWORD_MESSAGE = 'Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы';
export const INVALID_NAME_MESSAGE = 'Пустое поле';
export const INVALID_EMAIL_MESSAGE = 'Неверный формат email';
export const INVALID_REP_PASSWORD_MESSAGE = 'Пароли не совпадают';

export class ValidationHelper{
    static nameValidate(value : string) : string | boolean {
        if(value.length != 0) return true;
        return INVALID_NAME_MESSAGE;
    }

    static emailValidate(value : string) : string | boolean {
        let regex : RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if(regex.test(value.toLocaleLowerCase())) return true;
        return INVALID_EMAIL_MESSAGE;
    }

    static passworsValidate(value : string) : string | boolean {
        let regex : RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if(regex.test(value)) return true;
        return INVALID_PASSWORD_MESSAGE;
    }

    static repPasswordValidate(value : string, valueInput :string) : string | boolean {
        if(value.length != valueInput.length) return INVALID_REP_PASSWORD_MESSAGE;
        for(let i : number = 0; i < value.length; i++){
            if(value[i] != valueInput[i]) return INVALID_REP_PASSWORD_MESSAGE;
        }
        return true;
    }
}