import { observer } from "mobx-react-lite";
import { useMemo, useState, useRef, useContext } from "react";
import { Context } from "../../..";
import { ColorBackground, ColorText } from "../../../entities/Enums/ColorTextPopUp";
import { UpdateToolyip } from "../../common/UpdateTooltip";
import useInput from "../../hooks/UseInput";
import Input from "../FormPart/Input";
import ModalDelete from "../Modals/ModalDelete";
import Portal from "../Portal";
import TooltipPopover, { Coodinates } from "../TooltipPopover";
import styles from "./css/DropDownFolder.module.css";
import ModalMenu, { ModalMenuItem } from "./ModalMenu";


interface DropDownItemFolderProps {
    folderId: number;
    content: string;
    index: number;
    onClick: () => void;
}

const DropDownItemFolder: React.FC<DropDownItemFolderProps> = observer(({ folderId, content, onClick, index }) => {
    const { folderStore } = useContext(Context);
    const [isHide, setIsHide] = useState<boolean>(true);
    const parent = useRef();
    const [coords, setCoords] = useState<Coodinates>({} as Coodinates);
    const [updateHide, setUpdateHide] = useState<boolean>(true);
    const [deleteHide, setDeleteHide] = useState<boolean>(true);
    const [coordsUpdate, setCoordsUpdate] = useState<Coodinates>({} as Coodinates);
    const newName = useInput();
    const [count, setCount] = useState(0);

    const contextMenuHandler = (e: any) => {
        e.preventDefault();
        updateTooltipCoords(e.target);
        setIsHide(isHide => !isHide);
    }

    const updateTooltipCoords = (e: any) => {
        const rect = e.getBoundingClientRect();
        const newCoords = UpdateToolyip.updateTooltipCoords(e, rect.x * 2, window.scrollY)
        setCoords(newCoords);
    }

    const updateUpdateToolpitCoords = (e: any) => {
        const newCoords = UpdateToolyip.updateTooltipCoords(e, 0, window.scrollY);
        setCoordsUpdate(newCoords);
    }

    const clickOutsideHandler = () => {
        setIsHide(true);
    }

    const updateClickHandler = () => {
        updateUpdateToolpitCoords(parent.current);
        setIsHide(true);
        setUpdateHide(false);
    }

    const keyDownHandler = (e: any) => {
        if (e.key === 'Enter') {
            folderStore.updateFolderName(folderId, newName.value);
            setUpdateHide(true);
        }
    }

    const deleteClickHandler = () => {
        setDeleteHide(false);
        setIsHide(true);
    }

    const clickCancelHandler = () => {
        setDeleteHide(true);
    }

    const clickContinueHandler = () => {
        folderStore.deleteFolder(folderId);
        setDeleteHide(true);
    }

    //TODO не работает useState
    const closeHandler = (e: any) => {
        console.log(count);
        setCount(count+1);
        console.log(count);
        // if (count > 1) {
        //     console.log('count ', count);
        //     console.log(newName.value);
        //     folderStore.updateFolderName(folderId, newName.value);
        //     setUpdateHide(true);
        //     setCount(0);
        // }
    }

    const itemsMenu = useMemo<ModalMenuItem[]>(() => [
        {
            content: 'Переименовать',
            color: ColorText.Black,
            onClick: () => updateClickHandler()
        },
        {
            content: 'Дублировать',
            color: ColorText.Black,
            onClick: () => console.log('Дублировать')
        },
        {
            content: 'Удалить',
            color: ColorText.Red,
            onClick: () => deleteClickHandler()
        }
    ], []);

    return (
        //@ts-ignore
        <div key={content} ref={parent} className={styles.wrapDiv}>
            <li className={styles.ItemList} onClick={onClick} onContextMenu={contextMenuHandler}>{content}</li>
            {
                isHide
                    ? null
                    : <Portal>
                        <TooltipPopover
                            index={index}
                            coord={coords}
                            updateTooltipCoords={() => updateTooltipCoords(parent.current)}
                            closeHandler={clickOutsideHandler}>
                            <ModalMenu
                                backgroundColor={ColorBackground.White}
                                isLeft={true}
                                items={itemsMenu}
                                positionStyle={styles.PositionMenu} />
                        </TooltipPopover>
                    </Portal>
            }
            {
                updateHide
                    ? null
                    : <Portal>
                        <TooltipPopover index={index}
                            coord={coordsUpdate}
                            updateTooltipCoords={() => updateUpdateToolpitCoords(parent.current)}
                            closeHandler={closeHandler}>
                            <Input placeholder={"Введите название..."} onKeyDown={keyDownHandler} onChange={newName.onChange} />
                        </TooltipPopover>
                    </Portal>
            }
            {
                deleteHide
                    ? null
                    : <Portal>
                        <ModalDelete nameFolder={content}
                            clickCancelHandler={clickCancelHandler}
                            clickContinueHandler={clickContinueHandler} />
                    </Portal>
            }
        </div>
    )
})

export default DropDownItemFolder;