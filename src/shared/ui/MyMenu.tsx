import styles from "./css/Menu.module.css"
import Arrow from "../../assets/icons/icon-dropdown.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import folder from "../../store/folder"

interface MyMenuProps {
    isOpenMenu: boolean
}

const MyMenu = (props: { titleMy: string }) => {

    const [stateMenu, setStateMenu] = useState<MyMenuProps>({
        isOpenMenu: false
    });

    const styleArrow = stateMenu.isOpenMenu ? styles.OpenDropDown : styles.CloseDropDown;
    const styleWrap = stateMenu.isOpenMenu ? styles.DivDropDownWrap : styles.DivDropDownWrapNone;
    const styleDropDown = stateMenu.isOpenMenu ? styles.DivDropDownOpen : styles.DivDropDownClose;


    const onClickHandler = () => {
        setStateMenu({
            ...stateMenu, isOpenMenu: !stateMenu.isOpenMenu
        })
    }

    return (
        <div className={styles.DivWrapMenu}>
            <div className={styles.DivTitle} onClick={onClickHandler}>
                <p className={styles.TitleMenu}>{props.titleMy}</p>
                <img className={styleArrow} src={Arrow}></img>
            </div>
            <div className={styleWrap}>
                <div className={styleDropDown}>
                    {
                        folder.apiGetFolders().map((item, index) => (
                            <Link key={index} className={styles.TitleDropDown} to={item.url}>{item.name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyMenu;