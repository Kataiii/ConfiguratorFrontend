import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ValidationHelper, HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import styles from "./css/InputForm.module.css"
import stylesInput from "./css/InputFormCompany.module.css"
import styleBtn from "../../../app/App.module.css"
import ErrorForm from "./ErrorForm";
import HelperForm from "./HelperForm";
import { useState } from "react";
import { schemaCompanyRegist, FormCompanyValues } from "../../../entities/User/Company";

const FormCompany = () => {
    const [helperState, setHelperState] = useState({
        visible: false,
        checkedMail: true
    });

    const formApi = useForm<FormCompanyValues>({
        mode: 'onChange',
        resolver: yupResolver(schemaCompanyRegist)
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

    const onMouseEnterHandler = () => {
        setHelperState({
            ...helperState, visible: true
        })
    }

    const onMouseLeaveHandler = () => {
        setHelperState({
            ...helperState, visible: false
        })
    }

    const onClickHandler = () => {
        setHelperState({
            ...helperState, checkedMail: !helperState.checkedMail
        })
    }

    const styleName = errors?.firstname ? styles.FormInputEr : styles.FormInput;
    const styleSurName = errors?.surname ? styles.FormInputEr : styles.FormInput;
    const stylePhone = errors?.phone ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.repeatPassword ? styles.FormInputEr : styles.FormInput;

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <div className={styles.FormContentDiv}>
                    <p className={styles.FormContent}>ФИО контактного лица</p>
                    <div className={stylesInput.PersonalDataDiv}>
                        <div className={styles.FormDivWrapError}>
                            <input className={styleName} id={stylesInput.InputFirstName} {...register("firstname")} placeholder="Имя" />
                            {errors?.firstname
                                &&
                                <ErrorForm errorcontent={(typeof errors.firstname.message == 'string') ? errors.firstname.message : ""}></ErrorForm>
                            }
                        </div>

                        <div className={styles.FormDivWrapError}>
                            <input className={styleSurName} id={stylesInput.InputSurName} {...register("surname")} placeholder="Фамилия" />
                            {errors?.surname
                                &&
                                <ErrorForm errorcontent={(typeof errors.surname.message == 'string') ? errors.surname.message : ""}></ErrorForm>
                            }
                        </div>

                        <div className={styles.FormDivWrapError}>
                            <input className={styles.FormInput} id={stylesInput.InputPatronymic} {...register("patronymic")} placeholder="Отчество" />
                        </div>
                    </div>
                    <div className={stylesInput.PersonalDataDiv}>
                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Телефон</p>
                            <div className={styles.FormDivWrapError}>
                                <input className={stylePhone} id={stylesInput.InputPhone} {...register("phone")} placeholder="Телефон..." />
                                {errors?.phone &&
                                    <ErrorForm errorcontent={(typeof errors.phone.message == 'string') ? errors.phone.message : ""}></ErrorForm>
                                }
                            </div>
                        </div>
                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Email</p>
                            <div className={styles.FormDivWrapError}>
                                <input className={styleEmail} id={stylesInput.InputPhone} {...register("email")} placeholder="Email..." />
                                {errors?.email &&
                                    <ErrorForm errorcontent={(typeof errors.email.message == 'string') ? errors.email.message : ""}></ErrorForm>
                                }
                            </div>
                        </div>
                    </div>

                    <div className={stylesInput.PersonalDataDiv}>
                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Пароль</p>

                            <div className={styles.FormDivWrapError}>
                                <input className={stylePassword}
                                    id={stylesInput.InputPhone}
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
                                        <HelperForm content={HELPER_PASSWORD_MESSAGE} />
                                        :
                                        null
                                }
                            </div>

                            <div className={styles.FormDivWrapError}>
                                <input className={styleRepPassword}
                                    id={stylesInput.InputPhone}
                                    type="password"
                                    {...register("repeatPassword")}
                                    placeholder="Подтверждение пароля..."
                                />
                                {errors?.repeatPassword &&
                                    <ErrorForm errorcontent={(typeof errors.repeatPassword.message == 'string') ? errors.repeatPassword.message : ""}></ErrorForm>
                                }
                            </div>

                            <p className={styles.FormContent}>Тип организации</p>
                        </div>
                    </div>
                </div>
                <input className={styleBtn.BtnStyle} type="submit" value='Готово'></input>
            </form>
        </div>
    )
}

export default FormCompany;