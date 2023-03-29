import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import WrapInputForm from "../shared/ui/FormPart/WrapInputForm";
import { useState } from "react";

export interface IFormLogin {
    email: string,
    password: string,
    failAuth: boolean
}

const FormRegistUser = () => {
    const [registState, setLoginState] = useState<IFormLogin>({
        email: '',
        password: '',
        failAuth: true
    })

    const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({
            ...registState, email: e.target.value
        });
    }

    return (
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Регистрация</h1>
            <div className={styles.FormDivWrapLink}>
                <p className={styles.FormContent}>У вас уже есть аккаунт?  </p>
                <Link to={'/login'} className={styles.FormLinkWrap}>
                    <p className={styles.FormLink}>Войти</p>
                </Link>
            </div>
            <WrapInputForm type="text"
                placeholderInput="Ваше имя..."
                action={onBlurEmail}
                state={registState}
                error="Незаполненное поле" />
            <WrapInputForm type="text"
                placeholderInput="Email..."
                action={onBlurEmail}
                state={registState}
                error="Неверный формат email" />
            <WrapInputForm type="password"
                placeholderInput="Пароль..."
                action={onBlurEmail}
                state={registState}
                error="Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы" />
        </div>
    )
}

export default FormRegistUser;