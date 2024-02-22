import Button from "../ButtonPrim";
import Close from "../../../assets/icons/icon-close.svg";
import styles from "../css/DeleteModal.module.css";

interface ModalDeleteProps{
    nameFolder: string;
    clickCancelHandler: () => void;
    clickContinueHandler: () => void;
}

//TODO Переделать под удаление папки и проекта
const ModalDelete:React.FC<ModalDeleteProps> = ({nameFolder, clickCancelHandler, clickContinueHandler}) => {
    return(
        <div className={styles.divModal}>
            <img className={styles.buttonCancelModal} src={Close} alt={'cancel'} onClick={clickCancelHandler}/>
            <h1 className={styles.titleModal}>Вы действительно хотите удалить папку</h1>
            <h1 className={styles.titleModal}>{nameFolder}?</h1>
            <p className={styles.pModal}>Файлы в корзине будут хранится 30 дней после чего они удалятся &nbsp;<p className={styles.pBorderModal}>навсегда</p></p>
            <div className={styles.divWrapButtons}>
                <Button title={"Отменить"} onClick={clickCancelHandler} isDisabled={false}/>
                <button className={styles.buttonModal} onClick={clickContinueHandler}>Продолжить</button>
            </div>
        </div>
    )
}

export default ModalDelete;