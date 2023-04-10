import DropdownMenu, { DropdownButtonItem } from "./DropDownMenu";
import LinkLanding from "./LinkLanding";
import styles from "../../app/App.module.css"
import { useMemo } from "react";
import { useNavigate } from "react-router";
import ButtonLink from "./ButtonLink";
import Chat from "../../assets/icons/icon-chat.svg"
import MyProject from "../../assets/icons/icon-my-projects.svg"


const AuthorisedHeader = () => {
    const className : string = styles.AuthHeader;

    const navigate = useNavigate();

    const authorisedmenuItems = useMemo<DropdownButtonItem[]>(() =>  [
      {
        label: 'Мои проекты',
        action: () => navigate('/home')
      },
      {
        label: 'Профиль',
        action: () => navigate('/home/profile')
      }
      ,
      {
        label: 'Выйти',
        action: () => navigate('/')
      }
    ], [])

    return(
        <div className={className}>
            <LinkLanding></LinkLanding>
            <div className={styles.BtnLinkWrap}>
              <ButtonLink img={MyProject} imgAlt="мои проекты" content="Мои проекты" action={() => navigate('/home')}></ButtonLink>
              <ButtonLink img={Chat} imgAlt="чаты" content="Чат" action={() => navigate('/')}></ButtonLink>
              <DropdownMenu links={authorisedmenuItems}></DropdownMenu>
            </div>
        </div>
    );
}

export default AuthorisedHeader;