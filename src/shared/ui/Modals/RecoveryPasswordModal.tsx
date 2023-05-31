import { useContext, useState } from "react";
import Button from "../ButtonPrim";
import styles from '../css/Modals.module.css';
import stylesInput from '../FormPart/css/InputForm.module.css';
import DefaultModal from './DefaultModal';
import { useNavigate } from "react-router-dom";
import { ValidationHelper } from "../../common/ValidationHelper";
import { Context } from "../../..";

const RecoveryPasswordModal = () => {
    const navigate = useNavigate();
    const [email, setEmailState] = useState('');
    const [visibleModal, setVisibleModalState] = useState(false);
    const {store} = useContext(Context);

    const onClickHandler = async () => {
        const resValidate = ValidationHelper.emailValidate(email);
        if(typeof resValidate === "boolean"){
            const res = await store.recoveryPassword(email);
            if(res === 404){
                setVisibleModalState(true);
            }
            return;
        }
        setVisibleModalState(true);
    }

    return(
        <div className={styles.ModalDiv}>
            <div className={styles.ModalDivContent}>
                <h1 className={styles.ModalTitle}>Восстановлени пароля</h1>
                <p className={styles.ModalContent}>Введите адрес Вашей электронной почты, и мы вышлем инструкции по получению нового пароля</p>
            </div>
            
            <div className={styles.ModalDivContent}>
                <input className={stylesInput.FormInput} onChange={(e) => {setEmailState(e.target.value)}} type='text' placeholder='Email...'></input>
            </div>
            <Button title="Отправить" isDisabled={false} onClick={onClickHandler}/>
            {
                visibleModal
                ?
                    <DefaultModal title="Пользователь не найден" 
                        message="Пользователя с таким email не существует. Проверьте правильность написания или зарегистрируйтесь."
                        titleBtn="Зарегистрироваться"
                        actionBtn={() => {
                            setVisibleModalState(false);
                            navigate('/login/register');
                        }}/>
                :
                    null
            }
        </div>
    )
}

export default RecoveryPasswordModal;