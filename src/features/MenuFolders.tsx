import { ICreateFolderDto, IFolderProject } from "../entities/Folder/FolderProject";
import Arrow from "../assets/icons/icon-dropdown.svg";
import styles from "./css/MenuFolders.module.css";
import AddButton from "../assets/icons/icon-add-folder.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import DropDownFolder from "../shared/ui/DropDown/DropDownFolder";

interface MenuFoldersProps{
    folders: IFolderProject[];
    typeFolders: string;
    title: string;
}

const MenuFolders: React.FC<MenuFoldersProps> = observer(({folders, typeFolders, title}) => {
    const {store, folderStore} = useContext(Context);
    const [isHide, setIsHide] = useState<boolean>(true);

    const clickHandler = async() => {
        if(typeFolders == "projects"){
            const dto: ICreateFolderDto = {
                name: folderStore.createNewNameForDublicate("Новая папка"),
                account_id: store.getAccount().id,
                role_id: store.getActiveRole()?.id || -1
            };
            await folderStore.addFolder(dto);
        }
    }

    const clickHandlerHide = () => {
        setIsHide(isHide => !isHide);
    }

    return(
        <div className={styles.WrapMenu}>
            <div className={styles.WrapTitleMenu}>
                <div className={styles.DivTitleMenu}>
                    <p className={styles.TitleMenu}>{title}</p>
                    <img className={styles.ImageButton} src={Arrow} alt="arrow down" onClick={clickHandlerHide}/>
                </div>
                <img className={styles.ImageButton} src={AddButton} alt="add folder button" onClick={clickHandler}/>
            </div>
            <DropDownFolder folders={folders} isHide={isHide}/>
        </div>
    )
})

export default MenuFolders;