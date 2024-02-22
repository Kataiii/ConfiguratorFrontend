import styles from "../css/DeleteModal.module.css";
import Close from "../../../assets/icons/icon-close.svg";
import Button from "../ButtonPrim";
import CheckboxForm from "../FormPart/CheckboxForm";
import { Checkbox, ConfigProvider } from "antd";


interface InfoModalProps {
    title?: string;
    description?: string;
    checkBoxHandler: () => void;
    buttonContent: string;
    clickHandler: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ title, description, checkBoxHandler, buttonContent, clickHandler }) => {
    return (
        <div className={[styles.divModal, styles.divModalInfo].join(' ')}>
            <img className={styles.buttonCancelModal} src={Close} alt={'cancel'} onClick={clickHandler} />
            <h1 className={styles.titleModal}>{title}</h1>
            <p className={styles.pModal}>{description}</p>
            <div className={styles.divWrapCheckBox}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#E73C3C'
                        }
                    }}>
                    <Checkbox onChange={checkBoxHandler} />
                </ConfigProvider>
                <CheckboxForm content="Больше не показывать" />
            </div>
            <div className={styles.divWrapButton}>
                <Button title={buttonContent} onClick={clickHandler} isDisabled={false} />
            </div>
        </div>
    );
}

export default InfoModal;