import DropdownMenu, { DropdownButtonItem } from "./DropDownMenu";
import LinkLanding from "./LinkLanding";
import styles from "../../app/App.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";



const AuthorisedHeader = () => {
    const className : string = styles.Header;

    const navigate = useNavigate();

    const authorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        label: 'Мои проекты',
        action: () => navigate('/')
      },
      {
        label: 'Профиль',
        action: () => navigate('/login')
      }
      ,
      {
        label: 'Выйти',
        action: () => navigate('/login')
      }
    ], [])

    return(
        <div className={className}>
            <LinkLanding></LinkLanding>
            <DropdownMenu links={authorisedmenuItems}></DropdownMenu>
        </div>
    );
}

export default AuthorisedHeader;