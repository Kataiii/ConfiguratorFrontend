import { object, string, boolean, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ValidationHelper } from "../../shared/common/ValidationHelper";

export const REQUIRED_FIELD_MESSAGE = 'Поле обязательно для заполнения';

export type FormCompanyValues = {
    firstname: string,
    surname: string,
    patronymic: string,
    phone: string,
    email: string,
    password: string,
    repeatPassword: string,
    typeOrganization: string,
    letterCompanyRepresentatives: File,
    TINCertificate: File,
    isCheckedMailing: boolean,
    isCheckedUserAgreement: boolean
}

export const schemaCompanyRegist = object().shape({
    firstname: string().required(REQUIRED_FIELD_MESSAGE),
    surname: string().required(REQUIRED_FIELD_MESSAGE),
    phone: string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).required(REQUIRED_FIELD_MESSAGE),
    email: string()
        .matches(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            "Неверный формат email"
        )
        .required(REQUIRED_FIELD_MESSAGE),
    letterCompanyRepresentatives: mixed().required('Файл обязателен для прикрепления'),
    TINCertificate: mixed().required('Файл обязателен для прикрепления'),
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
})