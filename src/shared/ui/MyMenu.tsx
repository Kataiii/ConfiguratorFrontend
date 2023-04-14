import styles from "./css/Menu.module.css"
import Arrow from "../../assets/icons/icon-dropdown.svg"
import { DragEvent, useState } from "react"
import folder from "../../store/folder"
import { Folder } from "../../entities/Folder/folder"
import { useNavigate } from "react-router-dom"

interface MyMenuProps {
    isOpenMenu: boolean
}

const MyMenu = (props: { titleMy: string }) => {
    const navigate = useNavigate();
    const [folderList, setFolderList] = useState(folder.apiGetFolders());
    const [currentFolder, setCurrentFolder] = useState<Folder>(folderList[0]);

    const [stateMenu, setStateMenu] = useState<MyMenuProps>({
        isOpenMenu: false
    });

    const styleArrow = stateMenu.isOpenMenu ? styles.OpenDropDown : styles.CloseDropDown;
    const styleWrap = stateMenu.isOpenMenu ? styles.DivDropDownWrap : styles.DivDropDownWrapNone;
    const styleDropDown = stateMenu.isOpenMenu ? styles.DivDropDownOpen : styles.DivDropDownClose;


    const onClickHandler = () => {
        setStateMenu({
            ...stateMenu, isOpenMenu: !stateMenu.isOpenMenu
        })
    }

    const dragStartHandler = (e: DragEvent<HTMLDivElement>, item: Folder): void => {
        setCurrentFolder(item);
    }

    const dragLeaveHandler = (e: DragEvent<HTMLDivElement>): void => {
        (e.target as Element).className = styles.TitleDropDown;
    }

    const dragEndHandler = (e: DragEvent<HTMLDivElement>): void => {
        (e.target as Element).className = styles.TitleDropDown;
    }

    const dragOverHandler = (e: DragEvent<HTMLDivElement>, item: Folder): void => {
        e.preventDefault();
        if((e.target as Element).className == styles.TitleDropDown){
            (e.target as Element).className = styles.TitleDropDownShadow;
        }
    }

    function dropHandler(e: DragEvent<HTMLDivElement>, item: Folder): void {
        e.preventDefault();
        setFolderList(folderList.map(folder => {
            if(folder.id === item.id){
                return {...folder, order: currentFolder?.order}
            }
            if(folder.id === currentFolder.id){
                return {...folder, order: item.order}
            }
            return folder
        }));
        //Запрос с сохранением orders
        (e.target as Element).className = styles.TitleDropDown;
    }

    const sortCards = (firstFolder : Folder, secondFolder : Folder) => {
        if(firstFolder.order > secondFolder.order){
            return 1;
        }
        else{
            return -1;
        }
    }

    return (
        <div className={styles.DivWrapMenu}>
            <div className={styles.DivTitle} onClick={onClickHandler}>
                <p className={styles.TitleMenu}>{props.titleMy}</p>
                <img className={styleArrow} src={Arrow}></img>
            </div>
            <div className={styleWrap}>
                <div className={styleDropDown}>
                    {
                        folderList.sort(sortCards).map((item, index) => (
                                <p  className={styles.TitleDropDown}
                                    draggable={true}
                                    onDragStart={(e : DragEvent<HTMLDivElement>) => dragStartHandler(e, item)}
                                    onDragLeave={(e : DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
                                    onDragEnd={(e : DragEvent<HTMLDivElement>) => dragEndHandler(e)}
                                    onDragOver={(e : DragEvent<HTMLDivElement>) => dragOverHandler(e, item)}
                                    onDrop={(e : DragEvent<HTMLDivElement>) => dropHandler(e, item)}
                                    onClick={() => navigate(item.url)}
                                    key={item.id}>{item.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyMenu;