import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"
import stylesInput from "../shared/ui/FormPart/css/InputForm.module.css"
import ErrorForm from "../shared/ui/FormPart/ErrorForm";
import { HeaderForm } from "../shared/ui/FormPart/HeaderForm";
import auth from "../store/auth";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"


export interface IFormLogin {
  email: string,
  password: string,
  failEmail: boolean,
  failPassword: boolean,
  isAuthorised : boolean
}

const FormLogin = observer( () => {
  const navigate = useNavigate()

  const style = auth.formLogin.failEmail ? stylesInput.FormInputEr : stylesInput.FormInput;

  const onClickBtnHandler = async () =>{
      const res = await auth.apiLogin();
      auth.formLogin.isAuthorised ? navigate('/home') : navigate('/login');
  }

  return (
    <div className={styles.FormDiv}>
      <h1 className={styles.FormTitle}>Вход</h1>
      <HeaderForm formContent="У вас нет аккаунта?"
                  linkTo="/login/register"
                  linkTitle="Регистрация"
                  wrapperLink="styles.FormDivWrapLink"/>
      <div className={stylesInput.FormDivWrapError}>
        <input className={style}
          type="text"
          placeholder="Логин или email..."
          onFocus={auth.onFocusEmail}
          onChange={auth.onBlurEmail} />
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
          onChange={auth.onBlurPassword} />
        {
          auth.formLogin.failPassword
            ?
            <ErrorForm errorcontent="Неверный пароль" />
            :
            null
        }
      </div>
      <div className={styles.FormDivWrapButton}>
        <Button isDisabled={false} title="Вход" onClick={onClickBtnHandler}></Button>
      </div>
    </div>
  )
})

export default FormLogin;