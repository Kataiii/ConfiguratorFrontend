import styles from './css/ProfilePartMain.module.css';
import stylesInputs from './css/FormProfile.module.css';
import React from 'react';

interface FormProfilePartProps{
    is_checked: boolean;
}

const FormProfilePart: React.FC<FormProfilePartProps> = ({is_checked}) => {

    return(
        <div>
            <div>
                <p className={styles.Title}>ФИО</p>
                <div className={stylesInputs.WrapGeneralInf}>
                    <input id={stylesInputs.InputFirstname} className={styles.Input} type={'text'} placeholder='Имя'/>
                    <input id={stylesInputs.InputSurname} className={styles.Input} type={'text'} placeholder='Фамилия'/> 
                    <input id={stylesInputs.InputSurname} className={styles.Input} type={'text'} placeholder='Отчество'/>
                </div>
            </div>
            <div className={stylesInputs.WrapContactInf}>
                <div>
                    <p className={styles.Title}>Email</p>
                    <div className={stylesInputs.WrapGeneralInf}>
                        {
                            is_checked
                            ?
                                <div className={stylesInputs.WrapEmailConfirmed}>
                                    <input id={stylesInputs.InputEmailConfirmed} 
                                            className={styles.Input} 
                                            type={'email'} 
                                            placeholder='email@mail.ru'/>
                                </div>
                            :
                                <input id={stylesInputs.InputEmail} className={styles.Input} type={'email'} placeholder='email@mail.ru'/>
                        }
                        <button className={styles.Button}>Изменить</button>
                    </div>
                </div>
                <div>
                    <p className={styles.Title}>Телефон</p>
                    <div className={stylesInputs.WrapGeneralInf}>
                        <input id={stylesInputs.InputEmail} className={styles.Input} type={'text'} placeholder='+79603469551'/>
                        <button className={styles.Button}>Изменить</button>
                    </div>
                </div>
            </div>
            <div className={stylesInputs.WrapLastInf}>
                <div>
                    <p className={styles.Title}>Пароль</p>
                    <div className={stylesInputs.WrapPasswordInputs}>
                        <input id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Старый пароль'/>
                        <input id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Новый пароль'/>
                        <input id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Подтверждение пароля'/>
                    </div>
                    <button className={styles.PrimaryButton}>Сохранить изменения</button>
                </div>
                <div className={stylesInputs.WrapAboutInf}>
                    <p className={styles.Title}>Обо мне</p>
                    <textarea id={stylesInputs.InputTextArea} className={styles.Input}></textarea>
                    <div className={stylesInputs.WrapLinkButton}>
                        <button className={styles.LinkButton}>Перейти на коммерческий аккаунт</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormProfilePart;