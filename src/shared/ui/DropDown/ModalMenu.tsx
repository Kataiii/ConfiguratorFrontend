import { ColorBackground, ColorText } from "../../../entities/Enums/ColorTextPopUp";
import styles from "./css/ModalMenu.module.css";


export interface ModalMenuItem{
    content: string;
    color: ColorText;
    onClick: () => void;
}

interface ModalMenuProps{
    backgroundColor: ColorBackground;
    isLeft: boolean;
    items: ModalMenuItem[];
    positionStyle?: string;
}

const ModalMenu: React.FC<ModalMenuProps> = ({backgroundColor, isLeft, items, positionStyle}) => {
    const styleBackGroundColor = backgroundColor == ColorBackground.White ? styles.MenuBackWhite : styles.MenuBackBlack;
    const styleBorderRadius = isLeft ? styles.MenuLeft: styles.MenuRight;
    const styleBackGroundItemColor = backgroundColor == ColorBackground.White ? styles.MenuBackItemWhite : styles.MenuBackItemBlack;

    return(
        <ul className={[styles.MainStyleMenu, styleBackGroundColor, styleBorderRadius, positionStyle].join(' ')}>
            <>
                {
                    items.map((item, index) => {
                        return <li key={index} 
                                    onClick={item.onClick} 
                                    className={[styles.MainStyleItemMenu, styles[`textColor${item.color}`], styleBackGroundItemColor].join(' ')}>{item.content}</li>
                    })
                }
            </>
        </ul>
    )
}

export default ModalMenu;