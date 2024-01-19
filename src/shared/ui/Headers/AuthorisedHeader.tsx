import DropdownMenu from "../DropDown/DropDownMenu";
import LinkLanding from "../LinkLanding";
import styles from "./styles/Header.module.css"
import { useContext, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import ButtonLink from "../ButtonLink";
import Chat from "../../../assets/icons/icon-chat.svg";
import MyProject from "../../../assets/icons/icon-my-projects.svg";
import { Context } from "../../..";
import { PopUpMenuItem } from "../DropDown/PopUpMenu";
import { ColorText } from "../../../entities/Enums/ColorTextPopUp";


const AuthorisedHeader: React.FC = () => {
    const navigate = useNavigate();
    const locate = useLocation();
    let className = locate.pathname == '/'? styles.AuthHeaderLanding : styles.AuthHeader;
    const {store} = useContext(Context);

    const authorisedMenuItems = useMemo<PopUpMenuItem[]>(() =>  [
      {
        content: 'Мои проекты',
        action: () => navigate('/home'),
        color: ColorText.White
      },
      {
        content: 'Профиль',
        action: () => navigate('/home/profile'),
        color: ColorText.White
      },
      {
        content: 'Выйти',
        action: async () => 
        { 
          await store.logout();
          navigate('/');
        },
        color: ColorText.Red
      }
    ], [])

    return(
        <header className={className}>
            <LinkLanding></LinkLanding>
            <div className={styles.BtnLinkWrap}>
              <ButtonLink img={MyProject} imgAlt="мои проекты" content="Мои проекты" action={() => navigate('/home')}></ButtonLink>
              <ButtonLink img={Chat} imgAlt="чаты" content="Чат" action={() => navigate('/chats')}></ButtonLink>
              <DropdownMenu links={authorisedMenuItems}></DropdownMenu>
            </div>
        </header>
    );
}

export default AuthorisedHeader;