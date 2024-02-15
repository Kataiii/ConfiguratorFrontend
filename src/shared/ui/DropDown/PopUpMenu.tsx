import { useRef } from "react";
import { ColorText } from "../../../entities/Enums/ColorTextPopUp";
import { useOutsideClick } from "../../hooks/UseOutsideClick";
import styles from "./css/PopUpMenu.module.css";


export interface PopUpMenuItem{
    content:string;
    action: () => void;
    color: ColorText;
}

export interface PopUpMenuProps{
    items: PopUpMenuItem[];
    isFixedLeft: boolean;
    closeHandler: (e: any) => void;
}

const PopUpMenu: React.FC<PopUpMenuProps> = ({items, isFixedLeft, closeHandler}) => {
    const styleList = isFixedLeft ? styles.popUpLeft : styles.popUpRight;
    const ulRef = useRef<HTMLUListElement>(null);

    useOutsideClick(ulRef, closeHandler);

    return(
        <ul ref={ulRef} className={[styles.popUpMenu, styleList].join(' ')}>
            <>
                {
                    items.map((item, index) => {
                        return <li className={[styles.popUpMenuItem, item.color == ColorText.White? styles.itemWhite : styles.itemRed].join(' ')} 
                                    key={index}
                                    onClick={item.action}
                                >
                                    {item.content}
                                </li>
                    })
                }
            </>
        </ul>
    );
}

export default PopUpMenu;