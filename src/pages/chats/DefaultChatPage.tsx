import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import DraggableList from "../../shared/ui/Drag/DraggableList";
import PopUpMenu, { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";


const DefaultChatPage: React.FC = () => {
    const navigate = useNavigate();
    const locate = useLocation();

    const items = useMemo<string[]>(() =>  ["Папка 1","Папка 2","Папка 3"], [])


    return(
        <div>
            <h1>Чаты находятся в разработке</h1>
            <DraggableList items={items} multiplier={100}/>
        </div>
    )
}

export default DefaultChatPage;