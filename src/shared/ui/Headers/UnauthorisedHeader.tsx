import DropdownMenu, { DropdownButtonItem } from "../DropDownMenu";
import LinkLanding from "../LinkLanding";
import styles from "./styles/Header.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";



const UnauthorisedHeader = () => {
    const navigate = useNavigate();

    const unauthorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        label: 'Регистрация',
        action: () => navigate('/login/register')
      },
      {
        label: 'Авторизация',
        action: () => navigate('/login')
      }
    ], [])

    return(
        <header className={styles.Header}>
            <LinkLanding></LinkLanding>
            <DropdownMenu links={unauthorisedmenuItems}></DropdownMenu>
        </header>
    );
}

export default UnauthorisedHeader;