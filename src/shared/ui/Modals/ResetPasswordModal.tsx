import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { HELPER_PASSWORD_MESSAGE, ValidationHelper } from "../../common/ValidationHelper";
import styles from '../css/Modals.module.css';
import styleBtn from "../../../app/App.module.css"
import stylesInput from '../FormPart/css/InputForm.module.css';
import ErrorForm from "../FormPart/ErrorForm";
import HelperForm from "../FormPart/HelperForm";
import { Context } from "../../..";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultModal from "./DefaultModal";

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

    const {store} = useContext(Context);
    const locate = useLocation();
    const navigate = useNavigate();
    const [visibleModal, setVisibleModalState] = useState(false);

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
            const link = locate.pathname.slice(locate.pathname.lastIndexOf('/') + 1, locate.pathname.length);
            const res = await store.resetPassword(data.password, link);
            if(res === 400){
                setVisibleModalState(true);
                return;
            }
            navigate('/');
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
                <input className={styleBtn.BtnStyle} type="submit" />
            </div>
            {
                visibleModal
                ?
                    <DefaultModal title="Некорректная ссылка смены пароля"
                        message="Произошла ошибка во время сброса пароля. Некорректная ссылка для смены пароля. Проверьте корректность данных и попробуйте еще раз"
                        titleBtn="Восстановить пароль"
                        actionBtn={() => {
                            setVisibleModalState(false);
                            navigate('/login/recovery');
                        }}/>
                :
                    null
            }
        </form>
    )
}

export default ResetPasswordModal;