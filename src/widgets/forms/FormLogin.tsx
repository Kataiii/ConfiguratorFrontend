import Button from "../../shared/ui/ButtonPrim";
import styles from "../css/Form.module.css"
import stylesInput from "../../shared/ui/FormPart/css/InputForm.module.css"
import ErrorForm from "../../shared/ui/FormPart/ErrorForm";
import { HeaderForm } from "../../shared/ui/FormPart/HeaderForm";
import auth from "../../store/auth";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import { useContext, useEffect } from "react";
import { Context } from "../..";
import { Link } from "react-router-dom";
import useInput from "../../shared/hooks/UseInput";
import { IAuthDto } from "../../entities/Dto/AuthDto";


const FormLogin: React.FC = observer(() => {
    const { store, activeUser } = useContext(Context);
    const navigate = useNavigate();

    const email = useInput();
    const password = useInput();

    const style = auth.formLogin.failEmail ? stylesInput.FormInputEr : stylesInput.FormInput;

    useEffect(() => {
        store.isAuth ? navigate('/home') : navigate('/login');
    }, []);


    const onClickBtnHandler = async () => {        
        // setState({ accessToken: response.data, account: data.account })
        // const res = await store.login(email.value, password.value);
        // if (!store.isAuth) {
        //     auth.formLogin.failEmail = true;
        //     auth.formLogin.failPassword = true;
        // }
        // else {
        //     activeUser.refreshActiveUser(store.acount);
        // }
        // store.isAuth ? navigate('/home') : navigate('/login');
    }

    return (
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Вход</h1>
            <HeaderForm formContent="У вас нет аккаунта?"
                linkTo="/login/register"
                linkTitle="Регистрация"
                wrapperLink="styles.FormDivWrapLink" />
            <div className={stylesInput.FormDivWrapError}>
                <input className={style}
                    type="email"
                    placeholder="Email..."
                    onFocus={auth.onFocusEmail}
                    onChange={email.onChange} />
                {
                    auth.formLogin.failEmail
                        ?
                        <ErrorForm errorcontent="Неверный формат" />
                        :
                        null
                }
            </div>
            <div className={stylesInput.FormDivWrapError}>
                <input className={style}
                    type="password"
                    placeholder="Пароль..."
                    onFocus={auth.onFocusPassword}
                    onChange={password.onChange} />
                {
                    auth.formLogin.failPassword
                        ?
                        <ErrorForm errorcontent="Неверный пароль" />
                        :
                        null
                }
            </div>
            <div className={styles.LinkForgotWrap}>
                <Link className={styles.LinkForgot} to={'/login/recovery'}>Забыли пароль?</Link>
            </div>
            <div className={styles.FormDivWrapButton}>
                <Button isDisabled={false} title="Вход" onClick={onClickBtnHandler}></Button>
            </div>
        </div>
    )
})

export default FormLogin;