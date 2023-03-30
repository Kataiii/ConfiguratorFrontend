import { Link } from "react-router-dom";
import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"
import stylesInput from "../shared/ui/FormPart/css/InputForm.module.css"
import { useState } from "react";
import axios from "axios";
import ErrorForm from "../shared/ui/FormPart/ErrorForm";


export interface IFormLogin {
  email: string,
  password: string,
  failEmail: boolean,
  failPassword: boolean
}

const FormLogin = () => {
  const [loginState, setLoginState] = useState<IFormLogin>({
    email: '',
    password: '',
    failEmail: false,
    failPassword: false
  })

  const apiLogin = () => {
    const apiLoginUrl = 'http://127.0.0.1:9000/api/login';
    axios.post(apiLoginUrl,
      {
        email: loginState.email,
        password: loginState.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        withCredentials: true
      })
      .then((response) => {
        visibleError(false);
        console.log("Урааа");
      }
      )
      .catch(function (error) {
        if (error.response) {
          visibleError(true);
        }
      });
  }

  const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e != 'string')
      setLoginState({
        ...loginState, email: e.target.value
      });
  }

  const onBlurPassword = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e != 'string')
      setLoginState({
        ...loginState, password: e.target.value
      });
  }

  const visibleError = (isVisible: boolean) => {
    setLoginState({
      ...loginState, failEmail: isVisible, failPassword: isVisible
    })
  }

  const onFocusEmail = () => {
    setLoginState({
      ...loginState, failEmail: false
    });
  }

  const onFocusPassword = () => {
    setLoginState({
      ...loginState, failPassword: false
    });
  }

  const style = loginState.failEmail ? stylesInput.FormInputEr : stylesInput.FormInput;

  return (
    <div className={styles.FormDiv}>
      <h1 className={styles.FormTitle}>Вход</h1>
      <div className={styles.FormDivWrapLink}>
        <p className={styles.FormContent}>У вас нет аккаунта?</p>
        <Link to={'/login/register'} className={styles.FormLinkWrap}>
          <p className={styles.FormLink}>Регистрация</p>
        </Link>
      </div>
      <div className={stylesInput.FormDivWrapError}>
        <input className={style}
          type="text"
          placeholder="Логин или email..."
          onFocus={onFocusEmail}
          onChange={onBlurEmail} />
        {
          loginState.failEmail
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
          onFocus={onFocusPassword}
          onChange={onBlurPassword} />
        {
          loginState.failPassword
            ?
            <ErrorForm errorcontent="Неверный пароль" />
            :
            null
        }
      </div>
      <div className={styles.FormDivWrapButton}>
        <Button isDisabled={false} title="Вход" onClick={apiLogin}></Button>
      </div>
    </div>
  )
}

export default FormLogin;