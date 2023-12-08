import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import PopUpMenu, { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";


const DefaultChatPage = () => {
    const navigate = useNavigate();
    const locate = useLocation();

    const popupMenuItem = useMemo<PopUpMenuItem[]>(() =>  [
        {
          content: 'Мои проекты',
          action: () => navigate('/home'),
          color: ColorText.White
        },
        {
          content: 'Профиль',
          action: () => navigate('/home/profile'),
          color: ColorText.White
        }
        ,
        {
          content: 'Выйти',
          action: async () => 
          { 
            // await store.logout();
            navigate('/');
          },
          color: ColorText.Red
        }
      ], [])


    return(
        <div>
            <h1>Чаты находятся в разработке</h1>
            <PopUpMenu items={popupMenuItem} isFixedLeft={true}/>
        </div>
    )
}

export default DefaultChatPage;