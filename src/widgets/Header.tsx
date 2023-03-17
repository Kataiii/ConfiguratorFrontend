import DropdownMenu, { DropdownButtonItem } from "../features/DropDownMenu";
import LinkLanding from "../shared/ui/LinkLanding";
import { MenuProps } from 'antd';
import styles from "../app/App.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";



const Header = () => {
    const className : string = styles.Header;

    const navigate = useNavigate();

    const unauthorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        label: 'Регистрация',
        action: () => navigate('/')
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

export default Header;