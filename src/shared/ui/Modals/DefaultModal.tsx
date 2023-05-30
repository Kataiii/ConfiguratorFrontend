import styles from '../css/Modals.module.css';
import Button from '../ButtonPrim';


interface DefaultModalProps{
    title: string;
    message: string;
    titleBtn: string;
    actionBtn: () => void;
}

const DefaultModal = (props: DefaultModalProps) => {
    return(
        <div className={styles.ModalDivWrap}>
            <div className={styles.ModalDiv}>
                <div className={styles.ModalDivContent}>
                    <h1 className={styles.ModalTitle}>{props.title}</h1>
                    <p className={styles.ModalContent}>{props.message}</p>
                </div>
                <Button title={props.titleBtn} isDisabled={false} onClick={props.actionBtn}></Button>
            </div>
        </div>
    )
}

export default DefaultModal;