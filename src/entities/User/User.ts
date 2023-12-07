import { object, string, boolean } from "yup";
import { ValidationHelper } from "../../shared/common/ValidationHelper";

export interface ICreateUser{
    login: string;
    email: string;
    password: string;
    is_spam: boolean;
}

export interface IUser{
    id: number;
    login: string;
    surname: string | null;
    name: string | null;
    pathronomyc: string | null;
    phone_number: string | null;
    about_me: string | null;
}

export interface IUserProfile{
    surname: string | null;
    name: string | null;
    pathronomyc: string | null;
    profile_picture: File | null;
    city_id: number | null;
    email: string;
    phone_number: string | null;
    last_password: string | null;
    new_password: string | null;
    about_me: string | null;
}


export class formRegistUserContext{
    name : string = '';
    email : string = '';
    password : string = '';
    repeatPasswprd : string = '';
    isCheckedMailing : boolean = true;
    isCheckedUserAgreement : boolean = false;
}

export type FormValues = {
    login: string;
    email: string;
    password: string;
    repeatPassword: string;
    isCheckedMailing: boolean;
    isCheckedUserAgreement: boolean;
    isRegist : boolean;
};

export const schemaPersonRegist = object().shape({
    login: string().required("Поле обязательно для заполнения"),
    email: string()
        .matches(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            "Неверный формат email"
        )
        .required("Поле обязательно для заполнения"),
    password: string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*./?]).{8,}$/,
            "Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы"
        )
        .required("Поле обязательно для заполнения"),
    repeatPassword: string()
        .test("password_compare", `Пароли не совпадают`, function (
            repeatPassword: string | undefined
        ): boolean {
            return (typeof ValidationHelper.repPasswordValidate(repeatPassword, this.parent.password) == "boolean") ? true : false;
        })
        .required("Поле обязательно для заполнения"),
    isCheckedMailing: boolean(),
    isCheckedUserAgreement: boolean().test('check_compare', "Обязательно для заполнения", function (
        isCheckedUserAgreement: boolean | undefined
    ): boolean {
        return isCheckedUserAgreement == true;
    })
});