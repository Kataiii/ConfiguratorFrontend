import Button from "../../shared/ui/ButtonPrim";
import styles from "../css/Form.module.css"
import stylesInput from "../../shared/ui/FormPart/css/InputForm.module.css"
import ErrorForm from "../../shared/ui/FormPart/ErrorForm";
import { HeaderForm } from "../../shared/ui/FormPart/HeaderForm";
import auth from "../../store/auth";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import { ChangeEvent, FocusEvent, useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { Link } from "react-router-dom";
import useInput from "../../shared/hooks/UseInput";
import { IAuthDto } from "../../entities/Dto/AuthDto";
import WrapperInput from "../../shared/ui/FormPart/WrapperInput";


const FormLogin: React.FC = observer(() => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    const [failAuth, setFailAuth] = useState<boolean>(false);
    const email = useInput();
    const password = useInput();

    const style = failAuth ? stylesInput.FormInputEr : stylesInput.FormInput;
    
    useEffect(() => {
        store.getAuth() ? navigate('/home') : navigate('/login');
    }, []);

    const focusHandler = () => {
        setFailAuth(false);
    }

    const onClickBtnHandler = async () => {
        const response = await store.login({email: email.value, password: password.value});
        if(typeof(response) == 'number'){
            setFailAuth(true);
        }
        else{
            if(store.checkIsManyRoles()){
                navigate('/login/choose_role');
                return;
            };
            navigate('/home');
        }
    }

    return (
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Вход</h1>
            <HeaderForm formContent="У вас нет аккаунта?"
                linkTo="/login/register"
                linkTitle="Регистрация"
                wrapperLink="styles.FormDivWrapLink" />

            <WrapperInput 
                classNameWrapError={stylesInput.FormDivWrapError} 
                classNameInput={style} 
                typeInput={"email"} 
                placeholderInput={"Email..."} 
                onFocus={focusHandler} 
                onChange={email.onChange} 
                isFail={failAuth} 
                errorContent={"Неверный формат"}/>

            <WrapperInput 
                classNameWrapError={stylesInput.FormDivWrapError} 
                classNameInput={style} 
                typeInput={"password"} 
                placeholderInput={"Пароль..."} 
                onFocus={focusHandler} 
                onChange={password.onChange} 
                isFail={failAuth} 
                errorContent={"Неверный пароль"}/>

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