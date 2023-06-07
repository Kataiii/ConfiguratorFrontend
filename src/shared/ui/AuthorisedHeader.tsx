import DropdownMenu, { DropdownButtonItem } from "./DropDownMenu";
import LinkLanding from "./LinkLanding";
import styles from "../../app/App.module.css"
import { useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import ButtonLink from "./ButtonLink";
import Chat from "../../assets/icons/icon-chat.svg";
import MyProject from "../../assets/icons/icon-my-projects.svg";
import { Context } from "../..";


const AuthorisedHeader = () => {
    const navigate = useNavigate();
    const locate = useLocation();
    let className = locate.pathname == '/'? styles.AuthHeaderLanding : styles.AuthHeader;
    const {store} = useContext(Context);

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
        action: async () => 
        { 
          await store.logout();
          navigate('/');
        }
      }
    ], [])

    return(
        <div className={className}>
            <LinkLanding></LinkLanding>
            <div className={styles.BtnLinkWrap}>
              <ButtonLink img={MyProject} imgAlt="мои проекты" content="Мои проекты" action={() => navigate('/home')}></ButtonLink>
              <ButtonLink img={Chat} imgAlt="чаты" content="Чат" action={() => navigate('/chats')}></ButtonLink>
              <DropdownMenu links={authorisedmenuItems}></DropdownMenu>
            </div>
        </div>
    );
}

export default AuthorisedHeader;