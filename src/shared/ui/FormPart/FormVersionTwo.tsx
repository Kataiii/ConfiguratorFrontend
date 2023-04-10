import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import styles from "./css/InputForm.module.css"
import styleBtn from "../../../app/App.module.css"
import ErrorForm from "./ErrorForm";
import CheckboxForm from "./CheckboxForm";
import HelperForm from "./HelperForm";
import { useState } from "react";
import { schemaPersonRegist, FormValues } from "../../../entities/User/User";
import RegistUser from "../../../store/registUser";
import { observer } from "mobx-react-lite"


const FormVersionTwo = observer(() => {
    const[helperState, setHelperState] = useState({
        visible : false,
        checkedMail : true
    });
    const formApi = useForm<typeof RegistUser>({
        mode: 'onChange',
        resolver: yupResolver(schemaPersonRegist)
    });

    const {
        handleSubmit,
        formState: { errors },
        control,
        clearErrors,
        register
    } = formApi;

    const onClickBtnHandler = async () =>{
        //const res = await RegistUser.apiRegistUser();
        console.log(RegistUser.formRegist);
        //auth.formLogin.isAuthorised ? navigate('/home') : navigate('/login');
    }
    
    const onSubmit = handleSubmit(
        () => {
            console.log(JSON.stringify(RegistUser.formRegist));
        }
    );

    const onMouseEnterHandler  = () => {
            setHelperState({
                ...helperState, visible : true
            })
    }

    const onMouseLeaveHandler  = () => {
            setHelperState({
                ...helperState, visible : false
            })
    }

    const onClickHandler = () => {
        setHelperState({
            ...helperState, checkedMail : !helperState.checkedMail
        })
    }

    const styleName = errors?.formRegist?.login ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.formRegist?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.formRegist?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.formRegist?.repeatPassword ? styles.FormInputEr : styles.FormInput;

    return (
        <div className="App">
            <form onSubmit={onSubmit}>

                <div className={styles.FormDivWrapError}>
                    <input className={styleName} {...register("formRegist.login")} placeholder="Ваше имя..." />
                    {errors?.formRegist?.login
                        &&
                        <ErrorForm errorcontent={(typeof errors.formRegist.login.message == 'string') 
                        ?
                         errors.formRegist.login.message 
                         :
                          ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={styleEmail} {...register("formRegist.email")} placeholder="Email..." />
                    {errors?.formRegist?.email &&
                        <ErrorForm errorcontent={(typeof errors.formRegist.email.message == 'string') 
                        ? 
                        errors.formRegist.email.message 
                        : 
                        ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={stylePassword}
                        type="password"
                        {...register("formRegist.password")}
                        placeholder="Пароль..."
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    />
                    {errors?.formRegist?.password &&
                        <ErrorForm errorcontent={(typeof errors.formRegist.password.message == 'string') 
                        && !helperState.visible 
                        ?
                         errors.formRegist.password.message : ""}></ErrorForm>
                    }
                    {
                        helperState.visible == true
                            ?
                                <HelperForm content={HELPER_PASSWORD_MESSAGE}/>
                            :
                                null
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={styleRepPassword}
                        type="password"
                        {...register("formRegist.repeatPassword")}
                        placeholder="Подтверждение пароля..."
                    />
                    {errors?.formRegist?.repeatPassword &&
                        <ErrorForm errorcontent={(typeof errors.formRegist.repeatPassword.message == 'string') 
                        ?
                         errors.formRegist.repeatPassword.message 
                         :
                          ""}></ErrorForm>
                    }
                </div>

                <div className={styles.DivWrapCheckbox}>
                    <div className={styles.FormDivWrapError}>
                        <div className={styles.CheckboxDiv}>
                            <div className={styles.CheckboxWrapper}>
                                <input type='checkbox' 
                                        className={styles.FormCheckbox} 
                                        {...register('formRegist.isCheckedMailing')} 
                                        checked={helperState.checkedMail}
                                        onClick={onClickHandler}/>
                            </div>
                            <CheckboxForm
                                content="Я даю согласие на получение новостной рассылки </br> и другой маркетинговой информации"
                            />
                        </div>
                    </div>
                    <div className={styles.FormDivWrapError}>
                        <div className={styles.CheckboxDiv}>
                            <div className={styles.CheckboxWrapper}>
                                <input type='checkbox' 
                                        className={styles.FormCheckbox} 
                                        {...register('formRegist.isCheckedUserAgreement')}/>
                            </div>
                            <CheckboxForm
                                content="Я принимаю условия пользовательского соглашения </br> и даю согласие на обработку персональных данных"
                            />
                            {errors?.formRegist?.isCheckedUserAgreement &&
                                <ErrorForm errorcontent={(typeof errors.formRegist.isCheckedUserAgreement.message == 'string') 
                                ?
                                 errors.formRegist.isCheckedUserAgreement.message 
                                 :
                                  ""}></ErrorForm>
                            }
                        </div>
                    </div>
                </div>

                <input className={styleBtn.BtnStyle} type="submit" value='Готово'/>
            </form>
        </div>
    );
})

export default FormVersionTwo;