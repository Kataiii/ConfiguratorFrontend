import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import BlockRoleButton from "../../widgets/BlockRoleButton";
import styles from "../css/ChooseRolePage.module.css";
import LoadingPage from "../LoadingPage";


const ChooseRoleRage: React.FC = () => {
    const { store, activeUser } = useContext(Context);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        refreshToken();
    }, [])

    const refreshToken = async () => {
        await store.refresh();
        await activeUser.refreshActiveUser(store.getAccount());
        setIsLoading(false);
    }

    return (
        <>
            {
                isLoading
                    ? <LoadingPage />
                    : <div className={styles.moduleWrap}>
                        <div className={styles.moduleDiv}>
                            <h1 className={styles.moduleTitle}>Вход в аккаунт</h1>
                            <p className={styles.moduleContent}>Мы нашли у вас несколько аккаунтов, под каким вы хотите зайти?</p>
                            <BlockRoleButton />
                        </div>
                    </div>
            }
        </>
    );
}

export default ChooseRoleRage;