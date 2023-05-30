import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { HELPER_PASSWORD_MESSAGE, ValidationHelper } from "../../common/ValidationHelper";
import Button from "../ButtonPrim";
import styles from '../css/Modals.module.css';
import styleBtn from "../../../app/App.module.css"
import stylesInput from '../FormPart/css/InputForm.module.css';
import ErrorForm from "../FormPart/ErrorForm";
import HelperForm from "../FormPart/HelperForm";

type FormPasswords = {
    password: string;
    repeatPassword: string;
}

export const schemaPasswordReset = object().shape({
    password: string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*./?]).{8,}$/,
            "Пароль должен содержать минимум 8 знаков, среди которых есть </br> прописные и строчные буквы, а также специальные символы"
        )
        .required("Поле обязательно для заполнения"),
    repeatPassword: string()
        .test("password_compare", `Пароли не совпадают`, function (
            repeatPassword: string | undefined
        ): boolean {
            return (typeof ValidationHelper.repPasswordValidate(repeatPassword, this.parent.password) == "boolean") ? true : false;
        })
        .required("Поле обязательно для заполнения")
});

const ResetPasswordModal = () => {
    const[helperState, setHelperState] = useState({
        visible : false,
        checkedMail : true
    });

    const formApi = useForm<FormPasswords>({
        mode: 'onChange',
        resolver: yupResolver(schemaPasswordReset)
    });

    const {
        handleSubmit,
        formState: { errors },
        control,
        clearErrors,
        register
    } = formApi;

    const onSubmit = handleSubmit(
        async (data) => {
            console.log(data);
            // const res = await store.registUser(
            //     {
            //         login: data.login,
            //         email: data.email,
            //         password: data.password,
            //         is_spam: data.isCheckedMailing
            //     }
            // )
            // if(res === 400){
            //     store.setFailAuth(true);
            // }
            // store.isAuth ? navigate('/home') : navigate('/login/register/user');
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


    const stylePassword = errors?.password ? stylesInput.FormInputEr : stylesInput.FormInput;
    const styleRepPassword = errors?.repeatPassword ? stylesInput.FormInputEr : stylesInput.FormInput;

    return(
        <form onSubmit={onSubmit}>
            <div className={styles.ModalDiv}>
                <div className={styles.ModalDivContent}>
                    <h1 className={styles.ModalTitle}>Придумайте новый пароль</h1>
                    <p className={styles.ModalContent}>Новый пароль должен содержать минимум 8 знаков, среди которых есть прописные и строчные буквы, а также специальные символы</p>
                </div>

                <div className={stylesInput.FormDivWrapError}>
                        <input className={stylePassword}
                            type="password"
                            {...register("password")}
                            placeholder="Пароль..."
                            onMouseEnter={onMouseEnterHandler}
                            onMouseLeave={onMouseLeaveHandler}
                        />
                        {errors?.password &&
                            <ErrorForm errorcontent={(typeof errors.password.message == 'string') && !helperState.visible ? errors.password.message : ""}></ErrorForm>
                        }
                        {
                            helperState.visible == true
                                ?
                                    <HelperForm content={HELPER_PASSWORD_MESSAGE}/>
                                :
                                    null
                        }
                    </div>

                    <div className={stylesInput.FormDivWrapError}>
                        <input className={styleRepPassword}
                            type="password"
                            {...register("repeatPassword")}
                            placeholder="Подтверждение пароля..."
                        />
                        {errors?.repeatPassword &&
                            <ErrorForm errorcontent={(typeof errors.repeatPassword.message == 'string') ? errors.repeatPassword.message : ""}></ErrorForm>
                        }
                    </div>
                
                {/* <div className={styles.ModalDivContent}>
                    <input className={stylesInput.FormInput} type='password' placeholder='Новый пароль...'></input>
                </div>

                <div className={styles.ModalDivContent}>
                    <input className={stylesInput.FormInput} type='password' placeholder='Подтвердите пароль...'></input>
                </div> */}
                <input className={styleBtn.BtnStyle} type="submit" />
                {/* <Button title="Сохранить" isDisabled={false} onClick={() => {console.log('Сохранить')}}/> */}
            </div>
        </form>
    )
}

export default ResetPasswordModal;