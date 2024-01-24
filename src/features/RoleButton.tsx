import { useContext } from "react";
import { Context } from "..";
import Avatar from '../assets/icons/icon-avatar.svg';
import styles from './css/RoleButton.module.css';

interface RoleButtonProps {
    image: string;
    title: string;
    content: string;
    onClick: () => void
}


const RoleButton: React.FC<RoleButtonProps> = ({ image, title, content, onClick }) => {
    return (
        <div className={styles.wrap} onClick={onClick}>
            <img src={image} className={styles.image} />
            <div className={styles.wrapInfo}>
                <p className={styles.infoTitle}>{title}</p>
                <p className={styles.infoContent}>{content}</p>
            </div>
        </div>
    )
}

export default RoleButton;