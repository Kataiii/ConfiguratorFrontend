import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"
import { useState, useEffect } from "react";
import InputForm, {InputFormProps} from "../shared/ui/InputForm";
import axios from "axios";


interface IFormLogin{
  email : string,
  password : string
}

const FormLogin = () => {
    const [loginState, setLoginState] = useState<IFormLogin>({
        email : '',
        password : ''
    })

    useEffect(() => {
      const apiLoginUrl = 'http://127.0.0.1:9000/sanctum/csrf-cookie';
      axios.get(apiLoginUrl,{
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }, withCredentials: true
      }).then((response) => {
        //let str1 : string = `csrf-token":"`;
        //let str: number = response.data.indexOf(str1, response.data);
        //let csrfToken : string = response.data.slice(str + str1.length, str + str1.length+response.data.slice(str + str1.length).indexOf('"'));
        //console.log(csrfToken);
        //document.cookie = "csrf-token="+csrfToken;
        //localStorage.setItem('csrf-token', csrfToken);
        console.log(response.data)
      })
    }, [setLoginState]);

    const apiLogin = () => {
      const apiLoginUrl = 'http://127.0.0.1:9000/api/login';
      axios.post(apiLoginUrl, 
        {
          email : loginState.email,
          password : loginState.password 
        }, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-CSRF-TOKEN': localStorage.getItem('csrf-token') 
          },
        withCredentials:false})
      .then((response) => {
        console.log(response);
      })
    }

    const onBlurEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginState({
        ...loginState,email: e.target.value
      });
    }

    const onBlurPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginState({
        ...loginState,password: e.target.value
      });
    }

    return(
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Вход</h1>
            <div className={styles.FormDivWrapLink}>
                <p className={styles.FormContent}>У вас нет аккаунта?</p>
                <Link to={'/login/register'} >
                  <p className={styles.FormLink}>Регистрация</p>
                </Link>
            </div>
            <div className={styles.FormDivWrapInput}>
                <InputForm type="text" placeholder="Логин или email..." error="Неверный формат" action={onBlurEmail}></InputForm>
                <InputForm type="password" placeholder="Пароль..." error="Неверный пароль" action={onBlurPassword}></InputForm>
            </div>
            <div className={styles.FormDivWrapButton}>
                <Button title="Вход" onClick={apiLogin}></Button>
            </div>
        </div>
    )
}

export default FormLogin;