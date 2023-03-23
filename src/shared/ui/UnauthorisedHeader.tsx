import DropdownMenu, { DropdownButtonItem } from "./DropDownMenu";
import LinkLanding from "./LinkLanding";
import styles from "../../app/App.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";



const UnauthorisedHeader = () => {
    const className : string = styles.Header;

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
        <div className={className}>
            <LinkLanding></LinkLanding>
            <DropdownMenu links={unauthorisedmenuItems}></DropdownMenu>
        </div>
    );
}

export default UnauthorisedHeader;