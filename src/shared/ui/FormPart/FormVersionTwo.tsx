import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, boolean } from "yup";
import { ValidationHelper, HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import styles from "./css/InputForm.module.css"
import styleBtn from "../../../app/App.module.css"
import ErrorForm from "./ErrorForm";
import CheckboxForm from "./CheckboxForm";
import HelperForm from "./HelperForm";
import { useState } from "react";

type FormValues = {
    firstName: string;
    email: string;
    password: string;
    repeatPassword: string;
    isCheckedMailing: boolean;
    isCheckedUserAgreement: boolean;
};

const schema = object().shape({
    firstName: string().required("Поле обязательно для заполнения"),
    email: string()
        .matches(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            "Неверный формат email"
        )
        .required("Поле обязательно для заполнения"),
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
        .required("Поле обязательно для заполнения"),
    isCheckedMailing: boolean(),
    isCheckedUserAgreement: boolean().test('check_compare', "Обязательно для заполнения", function (
        isCheckedUserAgreement: boolean | undefined
    ): boolean {
        return isCheckedUserAgreement == true;
    })
});

export default function FormVersionTwo() {
    const[helperState, setHelperState] = useState({
        visible : false,
        checkedMail : true
    });
    const formApi = useForm<FormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const {
        handleSubmit,
        formState: { errors },
        control,
        clearErrors,
        register
    } = formApi;

    const onSubmit = handleSubmit(
        (data) => {
            console.log(JSON.stringify(data));
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

    const styleName = errors?.firstName ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.repeatPassword ? styles.FormInputEr : styles.FormInput;

    return (
        <div className="App">
            <form onSubmit={onSubmit}>

                <div className={styles.FormDivWrapError}>
                    <input className={styleName} {...register("firstName")} placeholder="Ваше имя..." />
                    {errors?.firstName
                        &&
                        <ErrorForm errorcontent={(typeof errors.firstName.message == 'string') ? errors.firstName.message : ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
                    <input className={styleEmail} {...register("email")} placeholder="Email..." />
                    {errors?.email &&
                        <ErrorForm errorcontent={(typeof errors.email.message == 'string') ? errors.email.message : ""}></ErrorForm>
                    }
                </div>

                <div className={styles.FormDivWrapError}>
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

                <div className={styles.FormDivWrapError}>
                    <input className={styleRepPassword}
                        type="password"
                        {...register("repeatPassword")}
                        placeholder="Подтверждение пароля..."
                    />
                    {errors?.repeatPassword &&
                        <ErrorForm errorcontent={(typeof errors.repeatPassword.message == 'string') ? errors.repeatPassword.message : ""}></ErrorForm>
                    }
                </div>

                <div className={styles.DivWrapCheckbox}>
                    <div className={styles.FormDivWrapError}>
                        <div className={styles.CheckboxDiv}>
                            <div className={styles.CheckboxWrapper}>
                                <input type='checkbox' 
                                        className={styles.FormCheckbox} 
                                        {...register('isCheckedMailing')} 
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
                                        {...register('isCheckedUserAgreement')}/>
                            </div>
                            <CheckboxForm
                                content="Я принимаю условия пользовательского соглашения </br> и даю согласие на обработку персональных данных"
                            />
                            {errors?.isCheckedUserAgreement &&
                                <ErrorForm errorcontent={(typeof errors.isCheckedUserAgreement.message == 'string') ? errors.isCheckedUserAgreement.message : ""}></ErrorForm>
                            }
                        </div>
                    </div>
                </div>

                <input className={styleBtn.BtnStyle} type="submit" />
            </form>
        </div>
    );
}
