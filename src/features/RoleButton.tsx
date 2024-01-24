import styles from './css/RoleButton.module.css';

interface RoleButtonProps {
    image: string;
    title: string;
    content: string;
    onClick: () => void;
    isLast: boolean;
}


const RoleButton: React.FC<RoleButtonProps> = ({ image, title, content, onClick, isLast }) => {
    const style: string = isLast ? styles.buttonDiv : [styles.buttonDiv, styles.wrapLast].join(' ');

    return (
        <div className={styles.wrap} onClick={onClick}>
            <div className={style}>
                <img src={image} className={styles.image} />
                <div>
                    <p className={styles.infoTitle}>{title}</p>
                    <p className={styles.infoContent}>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default RoleButton;