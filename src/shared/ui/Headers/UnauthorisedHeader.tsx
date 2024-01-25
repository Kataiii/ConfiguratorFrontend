import DropdownMenu, { DropdownButtonItem } from "../DropDown/DropDownMenu";
import LinkLanding from "../LinkLanding";
import styles from "./styles/Header.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { ColorText } from "../../../entities/Enums/ColorTextPopUp";


const UnauthorisedHeader: React.FC = () => {
    const navigate = useNavigate();

    const unauthorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        content: 'Регистрация',
        action: () => navigate('/login/register'),
        color: ColorText.White
      },
      {
        content: 'Авторизация',
        action: () => navigate('/login'),
        color: ColorText.White
      }
    ], [])

    return(
        <header className={styles.Header}>
            <LinkLanding></LinkLanding>
            <div className={styles.BtnLinkWrap}>
              <div className={styles.DivUndisplay}></div>
              <div className={styles.DivUndisplay}></div>
              <DropdownMenu links={unauthorisedmenuItems}></DropdownMenu>
            </div>
        </header>
    );
}

export default UnauthorisedHeader;