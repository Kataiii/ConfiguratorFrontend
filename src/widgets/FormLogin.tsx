import { Link } from "react-router-dom";
import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"
import { useState } from "react";
import axios from "axios";
import WrapInputForm from "../shared/ui/FormPart/WrapInputForm";


export interface IFormLogin {
  email: string,
  password: string,
  failAuth: boolean
}

const FormLogin = () => {
  const [loginState, setLoginState] = useState<IFormLogin>({
    email: '',
    password: '',
    failAuth: false
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

  const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState, email: e.target.value
    });
  }

  const onBlurPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState, password: e.target.value
    });
  }

  const visibleError = (isVisible: boolean) => {
    setLoginState({
      ...loginState, failAuth: isVisible
    })
  }

  return (
    <div className={styles.FormDiv}>
      <h1 className={styles.FormTitle}>Вход</h1>
      <div className={styles.FormDivWrapLink}>
        <p className={styles.FormContent}>У вас нет аккаунта?</p>
        <Link to={'/login/register'} className={styles.FormLinkWrap}>
          <p className={styles.FormLink}>Регистрация</p>
        </Link>
      </div>
      <WrapInputForm type="text"
        placeholderInput="Логин или email..."
        action={onBlurEmail}
        state={loginState}
        error="Неверный формат" />
      <WrapInputForm type="password"
        placeholderInput="Пароль..."
        action={onBlurPassword}
        state={loginState}
        error="Неверный пароль" />
      <div className={styles.FormDivWrapButton}>
        <Button title="Вход" onClick={apiLogin}></Button>
      </div>
    </div>
  )
}

export default FormLogin;