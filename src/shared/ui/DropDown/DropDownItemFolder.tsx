// @ts-nocheck
import { useMemo, useState, useRef } from "react";
import { ColorBackground, ColorText } from "../../../entities/Enums/ColorTextPopUp";
import Portal from "../Portal";
import TooltipPopover from "../TooltipPopover";
import styles from "./css/DropDownFolder.module.css";
import ModalMenu, { ModalMenuItem } from "./ModalMenu";


interface DropDownItemFolderProps {
    content: string;
    index: number;
    onClick: () => void
}

const DropDownItemFolder: React.FC<DropDownItemFolderProps> = ({ content, onClick }) => {
    const [isHide, setIsHide] = useState<boolean>(true);
    const parent = useRef();
    const [coords, setCoords] = useState({});

    const itemsMenu = useMemo<ModalMenuItem[]>(() => [
        {
            content: 'Переименовать',
            color: ColorText.Black,
            onClick: () => console.log('Переименовать')
        },
        {
            content: 'Дублировать',
            color: ColorText.Black,
            onClick: () => console.log('Дублировать')
        },
        {
            content: 'Удалить',
            color: ColorText.Red,
            onClick: () => console.log('Удалить')
        }
    ], []);

    const contextMenuHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        updateTooltipCoords(e.target);
        setIsHide(isHide => !isHide);
    }

    const updateTooltipCoords = (e: any) => {
        console.log('e', e);
        if(e != null){
            const rect = e.getBoundingClientRect();
            setCoords({
                left: rect.x + rect.x * 2,
                top: rect.y + window.scrollY //И еще что-то добавить для скролла внутри элемента
            });
        }
    }

    return (
        <div ref={parent} className={styles.wrapDiv}>
            <li className={styles.ItemList} onClick={onClick} onContextMenu={contextMenuHandler}>{content}</li>
            {
                isHide
                ? null
                :   <Portal>
                        <TooltipPopover 
                            coord={coords}
                            updateTooltipCoords={() => updateTooltipCoords(parent.current)}>
                            <ModalMenu 
                                backgroundColor={ColorBackground.White} 
                                isLeft={true} 
                                items={itemsMenu} 
                                positionStyle={styles.PositionMenu} />
                        </TooltipPopover>
                    </Portal>
            }
        </div>
    )
}

export default DropDownItemFolder;