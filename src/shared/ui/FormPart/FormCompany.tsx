import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
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
        checkedMail: true,
        letterCompany: false,
        letterCompanyStatus : 'undefined'
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
            ...helperState, visible: true, letterCompanyStatus: 'uploud'
        })
    }

    const onMouseLeaveHandler = () => {
        setHelperState({
            ...helperState, visible: false, letterCompanyStatus: 'notUpload'
        })
    }

    const onClickHandlerLetter = () => {
        let inputFile : HTMLElement|null = document.getElementById('getFileLetter');
        if(inputFile != null){
            inputFile.click();
            let input : HTMLInputElement = inputFile as HTMLInputElement;
            input.addEventListener('change', function(){
                if( this.value ){
                    setHelperState({
                        ...helperState, letterCompany : true
                    })
                } else {
                    setHelperState({
                        ...helperState, letterCompany : false
                    })
                }
            });
        }
    }

    const styleName = errors?.firstname ? styles.FormInputEr : styles.FormInput;
    const styleSurName = errors?.surname ? styles.FormInputEr : styles.FormInput;
    const stylePhone = errors?.phone ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.repeatPassword ? styles.FormInputEr : styles.FormInput;
    const styleBtnLetterFile = helperState.letterCompany ? stylesInput.BtnInputFileUpload : stylesInput.BtnInputFile

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
                            <select className={stylesInput.Select}  {...register("typeOrganization")}>
                                    <option className={stylesInput.Options}>Охранный</option>
                                    <option className={stylesInput.Options}>Еще какой-то</option>
                                    <option className={stylesInput.Options}>И еще какой-то</option>
                            </select>
                        </div>

                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Документация</p>
                            <div className={styles.FormDivWrapError}>
                                <div className={stylesInput.InputFileWrapper}>
                                    <p className={stylesInput.FormContentAdditionally}>Письмо представителей компании</p>
                                    <input className={styleBtnLetterFile} 
                                            onClick={onClickHandlerLetter}
                                            type='text' 
                                            readOnly 
                                            value='Загрузить'></input>
                                </div>
                                <input className={stylesInput.FileInput} {...register("letterCompanyRepresentatives")} id="getFileLetter"  type='file'/>
                                {errors?.letterCompanyRepresentatives &&
                                        <ErrorForm errorcontent={(typeof errors.letterCompanyRepresentatives.message == 'string') ? errors.letterCompanyRepresentatives.message : ""}></ErrorForm>
                                } 
                                {/* {helperState.letterCompanyStatus == 'notUpload' &&
                                        <ErrorForm errorcontent={"Файл обязателен для прикрепления"}></ErrorForm>
                                }  */}
                            </div>
                        </div>
                    </div>
                </div>
                <input className={styleBtn.BtnStyle} type="submit" value='Готово'></input>
            </form>
        </div>
    )
}

export default FormCompany;