import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HELPER_PASSWORD_MESSAGE } from "../../common/ValidationHelper";
import styles from "./css/InputForm.module.css"
import stylesInput from "./css/InputFormCompany.module.css"
import styleBtn from "../../../app/App.module.css"
import ErrorForm from "./ErrorForm";
import HelperForm from "./HelperForm";
import { useContext, useEffect, useState } from "react";
import { schemaCompanyRegist, FormCompanyValues } from "../../../entities/User/Company";
import CheckboxForm from "./CheckboxForm";
import Select from "../MySelect";
import { Context } from "../../..";
import { ICompanyType } from "../../../entities/Company/CompanyTypes";
import CompanyTypesService from "../../../store/services/CompanyTypeService";
import { useNavigate } from "react-router-dom";

//TODO разьить и привести в порядок
const FormCompany: React.FC = () => {
    const [helperState, setHelperState] = useState({
        visible: false,
        checkedMail: true,
        letterCompany: false,
        TINCompany: false
    });
    const {store, activeUser} = useContext(Context);
    const navigate = useNavigate();

    const formApi = useForm<FormCompanyValues>({
        mode: 'onChange',
        resolver: yupResolver(schemaCompanyRegist)
    });

    const {
        handleSubmit,
        formState: { errors },
        clearErrors,
        register
    } = formApi;

    const onSubmit = handleSubmit(
        async(data) => {
            const idTypeOrganisation = options.find(item => item.name === data.typeOrganization)?.id;
            const res = await store.registCompany({
                company_name: data.nameOrganisation,
                name: data.firstname,
                surname: data.surname,
                pathronomyc: data.patronymic,
                phone_number: data.phone,
                email: data.email,
                password: data.password,
                company_type_id: idTypeOrganisation || 1,
                is_spam: data.isCheckedMailing,
                files: [data.letterCompanyRepresentatives[0], data.TINCertificate[0]]
            });
            if(res == 400){
                store.setFailAuth(true);
            }
            else{
                await activeUser.refreshActiveUser(store.getAccount());
            }
            store.getAuth() ? navigate('/home') : navigate('/login/register/company');
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

    const onClickHandlerLetter = () => {
        let inputFile: HTMLElement | null = document.getElementById('getFileLetter');
        if (inputFile != null) {
            inputFile.click();
            let input: HTMLInputElement = inputFile as HTMLInputElement;
            input.addEventListener('change', function () {
                if (this.value) {
                    setHelperState({
                        ...helperState, letterCompany: true
                    })
                } else {
                    setHelperState({
                        ...helperState, letterCompany: false
                    })
                }
            });
        }
    }

    const onClickHandlerTIN = () => {
        let inputFile: HTMLElement | null = document.getElementById('getFileTIN');
        if (inputFile != null) {
            inputFile.click();
            let input: HTMLInputElement = inputFile as HTMLInputElement;
            input.addEventListener('change', function () {
                if (this.value) {
                    setHelperState({
                        ...helperState, TINCompany: true
                    })
                } else {
                    setHelperState({
                        ...helperState, TINCompany: false
                    })
                }
            });
        }
    }

    const onClickHandler = () => {
        setHelperState({
            ...helperState, checkedMail: !helperState.checkedMail
        })
    }

    const [month, setMonthValue] = useState(1);
    const handleMonthSelect = (id: number) => {
      setMonthValue(id);
    };

    const getCompanyTypes = async() => {
        try{
            const response = await CompanyTypesService.getAllTypes();
            setOptionsState(response.data);
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getCompanyTypes();
    }, [])

    const [options, setOptionsState] = useState<ICompanyType[]>([]);
    const selectedMonth = options.find((item) => item.id === month);

    const styleOrganisation = errors?.nameOrganisation ? styles.FormInputEr : styles.FormInput;
    const styleName = errors?.firstname ? styles.FormInputEr : styles.FormInput;
    const styleSurName = errors?.surname ? styles.FormInputEr : styles.FormInput;
    const stylePhone = errors?.phone ? styles.FormInputEr : styles.FormInput;
    const styleEmail = errors?.email ? styles.FormInputEr : styles.FormInput;
    const stylePassword = errors?.password ? styles.FormInputEr : styles.FormInput;
    const styleRepPassword = errors?.repeatPassword ? styles.FormInputEr : styles.FormInput;
    const styleBtnLetterFile = helperState.letterCompany ? stylesInput.BtnInputFileUpload : stylesInput.BtnInputFile
    const styleBtnTINFile = helperState.TINCompany ? stylesInput.BtnInputFileUpload : stylesInput.BtnInputFile

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
                            <p className={styles.FormContent}>Название организации</p>
                            <div id={stylesInput.FormDivWrapErrorPhone} className={styles.FormDivWrapError}>
                                <input className={styleOrganisation} id={stylesInput.InputPhone} {...register("nameOrganisation")} placeholder="Название организации..." />
                                {errors?.nameOrganisation &&
                                    <ErrorForm errorcontent={(typeof errors.nameOrganisation.message == 'string') ? errors.nameOrganisation.message : ""}></ErrorForm>
                                }
                            </div>
                        </div>
                        <div id={styles.SelectStyle} className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Тип организации</p>
                            <div className="Select" style={{width: '80%', height: '45px', borderRadius: '23px'}}>
                                <Select
                                options={options}
                                selected={selectedMonth || null}
                                onChange={handleMonthSelect}
                                placeholder="Выберите тип организации"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={stylesInput.PersonalDataDiv}>
                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Телефон</p>
                            <div id={stylesInput.FormDivWrapErrorPhone} className={styles.FormDivWrapError}>
                                <input className={stylePhone} id={stylesInput.InputPhone} {...register("phone")} placeholder="Телефон..." />
                                {errors?.phone &&
                                    <ErrorForm errorcontent={(typeof errors.phone.message == 'string') ? errors.phone.message : ""}></ErrorForm>
                                }
                            </div>
                        </div>
                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Email</p>
                            <div id={stylesInput.FormDivWrapErrorEmail} className={styles.FormDivWrapError}>
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

                            <div id={stylesInput.FormDivWrapErrorEmail} className={styles.FormDivWrapError}>
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

                            <div id={stylesInput.FormDivWrapErrorEmail} className={styles.FormDivWrapError}>
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
                        </div>

                        <div className={stylesInput.ContactDataDiv}>
                            <p className={styles.FormContent}>Документация</p>

                            <div className={styles.FormDivWrapError}>
                                <div className={stylesInput.InputFileWrapper}>
                                    <p className={stylesInput.FormContentAdditionally}>Письмо представителей компании</p>
                                    <div className={stylesInput.WrapstyleBtnLetterFile}>
                                        <input className={styleBtnLetterFile}
                                            onClick={onClickHandlerLetter}
                                            type='text'
                                            readOnly
                                            value={helperState.letterCompany ? 'Загружено' : 'Загрузить'} />
                                    </div>
                                </div>

                                <input className={stylesInput.FileInput} {...register("letterCompanyRepresentatives")} id="getFileLetter" name="letterCompanyRepresentatives" type='file' />
                                {errors?.letterCompanyRepresentatives &&
                                    <ErrorForm errorcontent={(typeof errors.letterCompanyRepresentatives.message == 'string') ? errors.letterCompanyRepresentatives.message : ""}></ErrorForm>
                                }
                            </div>

                            <div className={styles.FormDivWrapError}>
                                <div className={stylesInput.InputFileWrapper}>
                                    <p className={stylesInput.FormContentAdditionally}>Свидетельство ИНН</p>
                                    <div className={stylesInput.WrapstyleBtnLetterFile}>
                                        <input className={styleBtnTINFile}
                                            onClick={onClickHandlerTIN}
                                            type='text'
                                            readOnly
                                            value={helperState.TINCompany ? 'Загружено' : 'Загрузить'} />
                                    </div>
                                </div>

                                <input className={stylesInput.FileInput} {...register("TINCertificate")} id="getFileTIN" name="TINCertificate" type='file' />
                                {errors?.TINCertificate &&
                                    <ErrorForm errorcontent={(typeof errors.TINCertificate.message == 'string') ? errors.TINCertificate.message : ""}></ErrorForm>
                                }
                            </div>

                            <div className={styles.DivWrapCheckbox}>
                                <div className={styles.FormDivWrapError}>
                                    <div className={styles.CheckboxDiv} id={stylesInput.CheckBoxWrap}>
                                        <div className={styles.CheckboxWrapper}>
                                            <input type='checkbox'
                                                className={styles.FormCheckbox}
                                                {...register('isCheckedMailing')}
                                                checked={helperState.checkedMail}
                                                onClick={onClickHandler} />
                                        </div>
                                        <CheckboxForm
                                            content="Я даю согласие на получение новостной рассылки </br> и другой маркетинговой информации"
                                        />
                                    </div>
                                </div>
                                <div id={stylesInput.FormDivWrapErrorUserAgreement} className={styles.FormDivWrapError}>
                                    <div className={styles.CheckboxDiv} id={stylesInput.CheckBoxWrap}>
                                        <div className={styles.CheckboxWrapper}>
                                            <input type='checkbox'
                                                className={styles.FormCheckbox}
                                                {...register('isCheckedUserAgreement')} />
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
                        </div>
                    </div>
                    <div className={stylesInput.BtnSubmitWrap}>
                        <input className={styleBtn.BtnStyle} type="submit" value='Готово'/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormCompany;