import styles from '../css/Modals.module.css';
import Button from '../ButtonPrim';


interface DefaultModalProps{
    title: string;
    message: string;
    titleBtn: string;
    actionBtn: () => void;
}

const DefaultModal: React.FC<DefaultModalProps> = ({title, message, titleBtn,actionBtn}) => {
    return(
        <div className={styles.ModalDivWrap}>
            <div className={styles.ModalDiv}>
                <div className={styles.ModalDivContent}>
                    <h1 className={styles.ModalTitle}>{title}</h1>
                    <p className={styles.ModalContent}>{message}</p>
                </div>
                <Button title={titleBtn} isDisabled={false} onClick={actionBtn}></Button>
            </div>
        </div>
    )
}

export default DefaultModal;