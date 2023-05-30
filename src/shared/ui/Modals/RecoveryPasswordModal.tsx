import Button from "../ButtonPrim";
import styles from '../css/Modals.module.css';
import stylesInput from '../FormPart/css/InputForm.module.css';

const RecoveryPasswordModal = () => {
    return(
        <div className={styles.ModalDiv}>
            <div className={styles.ModalDivContent}>
                <h1 className={styles.ModalTitle}>Восстановлени пароля</h1>
                <p className={styles.ModalContent}>Введите адрес Вашей электронной почты, и мы вышлем инструкции по получению нового пароля</p>
            </div>
            
            <div className={styles.ModalDivContent}>
                <input className={stylesInput.FormInput} type='text' placeholder='Email...'></input>
            </div>
            <Button title="Отправить" isDisabled={false} onClick={() => {console.log('отправить')}}/>
        </div>
    )
}

export default RecoveryPasswordModal;