import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"
import stylesInput from "../shared/ui/FormPart/css/InputForm.module.css"
import ErrorForm from "../shared/ui/FormPart/ErrorForm";
import { HeaderForm } from "../shared/ui/FormPart/HeaderForm";
import auth from "../store/auth";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import { useContext, useState } from "react";
import { Context } from "..";


const FormLogin = observer( () => {
  const navigate = useNavigate()
  const {store} = useContext(Context);
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');

  const style = auth.formLogin.failEmail ? stylesInput.FormInputEr : stylesInput.FormInput;

  const onClickBtnHandler = async () =>{
      const res = store.login(email,password);
      store.isAuth ? navigate('/home') : navigate('/login');
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
          value={email}
          placeholder="Email..."
          onFocus={auth.onFocusEmail}
          onChange={e => setEmailState(e.target.value)} />
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
          value={password}
          onFocus={auth.onFocusPassword}
          onChange={e => setPasswordState(e.target.value)} />
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