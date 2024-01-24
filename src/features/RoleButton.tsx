import { useContext } from "react";
import { Context } from "..";
import Avatar from '../assets/icons/icon-avatar.svg';
import styles from './css/RoleButton.module.css';


const RoleButton: React.FC = () => {
    const { store } = useContext(Context);
    const account = store.getAccount();

    return (
        <div>
            {
                account.profile_picture == '' || account.profile_picture == null
                    ? <img src={Avatar} className={styles.image} />
                    : <img src={account.profile_picture} className={styles.image}/>
            }
            <div className={styles.wrapInfo}>
                <p>Логин</p>
                <p>фио или какой аккаунт</p>
            </div>
        </div>
    )
}

export default RoleButton;