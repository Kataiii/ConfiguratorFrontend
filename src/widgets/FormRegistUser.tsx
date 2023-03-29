import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import WrapInputForm from "../shared/ui/FormPart/WrapInputForm";
import { useState } from "react";
import Button from "../shared/ui/ButtonPrim";
import CheckboxForm from "../shared/ui/FormPart/CheckboxForm";
import { ValidationHelper, INVALID_EMAIL_MESSAGE, INVALID_NAME_MESSAGE, INVALID_PASSWORD_MESSAGE } from "../shared/common/ValidationHelper";

export interface IFormRegUser {
    name : string
    email: string,
    password: string,
    failAuth: boolean
}

const FormRegistUser = () => {
    const [registState, setLoginState] = useState<IFormRegUser>({
        name: '',
        email: '',
        password: '',
        failAuth: false
    })

    const onBluerName = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if(typeof e != 'string')
        setLoginState({
            ...registState, name: e.target.value
        });
    }

    const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if(typeof e != 'string')
        setLoginState({
            ...registState, email: e.target.value
        });
    }

    const onBlurPassword = (e: React.ChangeEvent<HTMLInputElement> | string) => {
        if(typeof e != 'string')
        setLoginState({
            ...registState, password: e.target.value
        });
    }

    return (
        <div className={styles.FormDivReg}>
            <h1 className={styles.FormTitle}>Регистрация</h1>
            <div className={styles.FormDivWrapLink}>
                <p className={styles.FormContent}>У вас уже есть аккаунт?  </p>
                <Link to={'/login'} className={styles.FormLinkWrap}>
                    <p className={styles.FormLink}>Войти</p>
                </Link>
            </div>
            <WrapInputForm type="text"
                placeholderInput="Ваше имя..."
                hasHelper={false}
                contentHelper={null}
                onBlur={ValidationHelper.nameValidate}
                onChange={onBluerName}
                error={INVALID_NAME_MESSAGE}/>
            <WrapInputForm type="text"
                placeholderInput="Email..."
                hasHelper={false}
                contentHelper={null}
                onBlur={ValidationHelper.emailValidate}
                onChange={onBlurEmail}
                error={INVALID_EMAIL_MESSAGE}/>
            <WrapInputForm type="password"
                placeholderInput="Пароль..."
                hasHelper={true}
                contentHelper = "Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы"
                onBlur={ValidationHelper.passworsValidate}
                onChange={onBlurPassword}
                error={INVALID_PASSWORD_MESSAGE}/>
            {/*<WrapInputForm type="password"
                placeholderInput="Подтверждение пароля..."
                hasHelper={false}
                contentHelper={null}
                onBlur={undefined}
                onChange={onBlurEmail}
                error="Пароли не совпадают" 
            />*/}
            <CheckboxForm ischecked={true} 
                          content="Я даю согласие на получение новостной рассылки </br> и другой маркетинговой информации"/>
            <CheckboxForm ischecked={false} 
                          content="Я принимаю условия пользовательского соглашения </br> и даю согласие на обработку персональных данных"></CheckboxForm>
            <Button title="Готово" onClick={() => {console.log("Готово")}}/>
        </div>
    )
}

export default FormRegistUser;