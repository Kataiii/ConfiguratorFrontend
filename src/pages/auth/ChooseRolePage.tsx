import BlockRoleButton from "../../widgets/BlockRoleButton";
import styles from "../css/ChooseRolePage.module.css";


const ChooseRoleRage: React.FC = () => {
    return (
        <div className={styles.moduleWrap}>
            <div className={styles.moduleDiv}>
                <h1 className={styles.moduleTitle}>Вход в аккаунт</h1>
                <p className={styles.moduleContent}>Мы нашли у вас несколько аккаунтов, под каким вы хотите зайти?</p>
                <BlockRoleButton />
            </div>
        </div>
    );
}

export default ChooseRoleRage;