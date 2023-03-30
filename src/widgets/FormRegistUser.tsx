import styles from "./css/Form.module.css"
import { Link } from "react-router-dom";
import WrapInputForm from "../shared/ui/FormPart/WrapInputForm";
import { useState } from "react";
import Button from "../shared/ui/ButtonPrim";
import CheckboxForm from "../shared/ui/FormPart/CheckboxForm";
import { ValidationHelper, INVALID_EMAIL_MESSAGE, INVALID_NAME_MESSAGE, INVALID_PASSWORD_MESSAGE } from "../shared/common/ValidationHelper";
import InputRepPassword from "../shared/ui/FormPart/InputRepPassword";

export interface IFormRegUser {
    name: string
    email: string,
    password: string,
    isCheckedMailing: boolean,
    isCheckedUserAgreement: boolean
    failAuth: boolean
}

const FormRegistUser = () => {
    const [registState, setLoginState] = useState<IFormRegUser>({
        name: '',
        email: '',
        password: '',
        isCheckedMailing: true,
        isCheckedUserAgreement: false,
        failAuth: false
    })

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
                error={INVALID_NAME_MESSAGE}
                setState={setLoginState}
                state={registState}
                name="name" />
            <WrapInputForm type="text"
                placeholderInput="Email..."
                hasHelper={false}
                contentHelper={null}
                onBlur={ValidationHelper.emailValidate}
                error={INVALID_EMAIL_MESSAGE}
                setState={setLoginState}
                state={registState}
                name="email" />
            <WrapInputForm type="password"
                placeholderInput="Пароль..."
                hasHelper={true}
                contentHelper="Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы"
                onBlur={ValidationHelper.passworsValidate}
                error={INVALID_PASSWORD_MESSAGE}
                setState={setLoginState}
                state={registState}
                name="password" />
            <InputRepPassword type="password"
                placeholder="Подтверждение пароля..."
                inputMain={registState.password} />
            <div className={styles.DivWrapCheckbox}>
                <CheckboxForm ischecked={true}
                    content="Я даю согласие на получение новостной рассылки </br> и другой маркетинговой информации"
                    state={registState}
                    setState={setLoginState}
                    name="isCheckedMailing" />
                <CheckboxForm ischecked={false}
                    content="Я принимаю условия пользовательского соглашения </br> и даю согласие на обработку персональных данных"
                    state={registState}
                    setState={setLoginState}
                    name="isCheckedUserAgreement" />
            </div>
            <Button isDisabled={registState.failAuth} title="Готово" onClick={() => { console.log("Готово") }} />
        </div>
    )
}

export default FormRegistUser;