import styles from './css/ProfilePartMain.module.css';
import stylesInputs from './css/FormProfile.module.css';
import React, { useContext, useState } from 'react';
import { Context } from '../../..';
import { IUserProfile } from '../../../entities/User/User';

interface FormProfilePartProps{
    surname: string | null;
    name: string | null;
    pathronomyc: string | null;
    email: string;
    is_checked: boolean;
    phone_number: string | null;
    about_me: string | null;
    city_id: number | null;
}

const FormProfilePart: React.FC<FormProfilePartProps> = ({surname, 
                                                        name, 
                                                        pathronomyc, 
                                                        email, 
                                                        is_checked, 
                                                        phone_number, 
                                                        about_me,
                                                        city_id}) => {
    const {store} = useContext(Context);
    const [userData, setUserData] = useState<IUserProfile>(
        {
            surname: surname,
            name: name,
            pathronomyc: pathronomyc == null ? '' : pathronomyc,
            profile_picture: null,
            city_id: city_id,
            email: email,
            phone_number: phone_number,
            last_password: null,
            new_password: null,
            about_me: about_me
        }
    );

    const onChangeHandler = (e: any) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        console.log(userData);
    }

    return(
        <div>
            <div>
                <p className={styles.Title}>ФИО</p>
                <div className={stylesInputs.WrapGeneralInf}>
                    <input name={'name'} id={stylesInputs.InputFirstname} className={styles.Input} type={'text'} placeholder='Имя' onChange={onChangeHandler}/>
                    <input name={'surname'} id={stylesInputs.InputSurname} className={styles.Input} type={'text'} placeholder='Фамилия' onChange={onChangeHandler}/> 
                    <input name={'pathronomyc'} id={stylesInputs.InputSurname} className={styles.Input} type={'text'} placeholder='Отчество' onChange={onChangeHandler}/>
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
                                            name={'email'}
                                            className={styles.Input} 
                                            type={'email'} 
                                            placeholder='email@mail.ru'
                                            value={userData.email}/>
                                </div>
                            :
                                <input id={stylesInputs.InputEmail} 
                                        name={'email'}
                                        className={styles.Input} 
                                        type={'email'} 
                                        placeholder='email@mail.ru' 
                                        value={userData.email}/>
                        }
                        <button className={styles.Button}>Изменить</button>
                    </div>
                </div>
                <div>
                    <p className={styles.Title}>Телефон</p>
                    <div className={stylesInputs.WrapGeneralInf}>
                        <input name='phone_number' id={stylesInputs.InputEmail} className={styles.Input} type={'text'} placeholder='+79603469551'/>
                        <button className={styles.Button}>Изменить</button>
                    </div>
                </div>
            </div>
            <div className={stylesInputs.WrapLastInf}>
                <div>
                    <p className={styles.Title}>Пароль</p>
                    <div className={stylesInputs.WrapPasswordInputs}>
                        <input name='last_password' id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Старый пароль' onChange={onChangeHandler}/>
                        <input name='new_password' id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Новый пароль' onChange={onChangeHandler}/>
                        <input name='repeat_new_password' id={stylesInputs.InputPassword} className={styles.Input} type={'password'} placeholder='Подтверждение пароля' onChange={onChangeHandler}/>
                    </div>
                    <button className={styles.PrimaryButton}>Сохранить изменения</button>
                </div>
                <div className={stylesInputs.WrapAboutInf}>
                    <p className={styles.Title}>Обо мне</p>
                    <textarea name='about_me' id={stylesInputs.InputTextArea} className={styles.Input} onChange={onChangeHandler}></textarea>
                    <div className={stylesInputs.WrapLinkButton}>
                        {
                            store.getAccount().roles.length === 1 && !store.getAccount().roles.find(item => item.name == 'admin')
                            ?
                                null
                            :
                                <button className={styles.LinkButton}>Перейти на коммерческий аккаунт</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormProfilePart;