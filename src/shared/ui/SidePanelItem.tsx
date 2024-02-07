import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../..";
import { IFolderProject } from "../../entities/Folder/FolderProject";
import stylesSidePanel from "../../routing/layouts/css/DevelopmentArea.module.css";
import styles from "./css/SidePanelItem.module.css";


interface SidePanelItemProps{
    folder: IFolderProject ;
    style?: string;
}

const SidePanelItem: React.FC<SidePanelItemProps> = observer(({folder, style}) => {
    const {folderStore} = useContext(Context);

    return(
        <Link key={folder.id} 
            className={[stylesSidePanel.LinkPersonal, styles[`${style}`]].join(' ')} 
            to={`/home/projects/${folder.name}`}
            onClick={() => folderStore.setActiveFolder(folder)}
        >
            {folder.name}
        </Link>
    )
})

export default SidePanelItem;