import { IFolderProject } from "../../../entities/Folder/FolderProject";
import DropDownItemFolder from "./DropDownItemFolder";
import styles from "./css/DropDownFolder.module.css";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useMemo } from "react";
import { Context } from "../../..";
import DraggableList from "../Drag/DraggableList";

interface DropDownFolderProps {
    folders: IFolderProject[];
    isHide: boolean;
}

const DropDownFolder: React.FC<DropDownFolderProps> = observer(({ folders, isHide }) => {
    const navigate = useNavigate();
    const {folderStore} = useContext(Context);
    
    const items = useMemo<JSX.Element[]>(() =>  [], [])
    //TODO переместить создание папок в DraggableList
    
    return (
        <ul className={[styles.DivList, isHide ? styles.DivListHide : styles.DivListNotHide].join(' ')}>
            <DraggableList items={items} multiplier={50}/>
            <>
                {
                    folders.map((item, index) => {
                        return <DropDownItemFolder 
                                    folderId={item.id} 
                                    key={item.id} 
                                    index={index} 
                                    content={item.name} 
                                    onClick={() => {
                                        navigate(`/home/projects/${item.name}`);
                                        folderStore.setActiveFolder(item);
                                    }}/>
                    })
                }
            </>
        </ul>
    )
})

export default DropDownFolder;