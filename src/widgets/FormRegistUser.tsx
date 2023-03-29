import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import WrapInputForm from "../shared/ui/FormPart/WrapInputForm";
import { useState } from "react";
import Button from "../shared/ui/ButtonPrim";
import CheckboxForm from "../shared/ui/FormPart/CheckboxForm";

export interface IFormLogin {
    email: string,
    password: string,
    failAuth: boolean
}

const FormRegistUser = () => {
    const [registState, setLoginState] = useState<IFormLogin>({
        email: '',
        password: '',
        failAuth: false
    })

    const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({
            ...registState, email: e.target.value
        });
        console.log("change");
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
            {/*<WrapInputForm type="text"
                placeholderInput="Ваше имя..."
                action={onBlurEmail}
                state={registState}
                error="Незаполненное поле" 
                hasHelper={false}/>
            <WrapInputForm type="text"
                placeholderInput="Email..."
                action={onBlurEmail}
                state={registState}
                error="Неверный формат email" 
                hasHelper={false}/>*/}
            <WrapInputForm type="password"
                placeholderInput="Пароль..."
                hasHelper={true}
                onFocus={() => {console.log('Helper')}}
                contentHelper = "Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы"
                onBlur={() => {console.log('error')}}
                onChange={onBlurEmail}
                error="Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы" 
                />
            <WrapInputForm type="password"
                placeholderInput="Подтверждение пароля..."
                hasHelper={false}
                onFocus={undefined}
                contentHelper={null}
                onBlur={() => {console.log('error')}}
                onChange={onBlurEmail}
                error="Пароли не совпадают" 
            />
            <CheckboxForm ischecked={true} 
                          content="Я даю согласие на получение новостной рассылки </br> и другой маркетинговой информации"/>
            <CheckboxForm ischecked={false} 
                          content="Я принимаю условия пользовательского соглашения </br> и даю согласие на обработку персональных данных"></CheckboxForm>
            <Button title="Готово" onClick={() => {console.log("Готово")}}/>
        </div>
    )
}

export default FormRegistUser;