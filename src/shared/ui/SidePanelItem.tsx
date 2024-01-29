import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IFolderProject } from "../../entities/Folder/FolderProject";
import stylesSidePanel from "../../routing/layouts/css/DevelopmentArea.module.css";
import styles from "./css/SidePanelItem.module.css";


interface SidePanelItemProps{
    folder: IFolderProject ;
    style?: string;
}

const SidePanelItem: React.FC<SidePanelItemProps> = ({folder, style}) => {

    return(
        <Link key={folder.id} 
            className={[stylesSidePanel.LinkPersonal, styles[`${style}`]].join(' ')} 
            to={`/home/projects/folders/${folder.name}`}
        >
            {folder.name}
        </Link>
    )
}

export default SidePanelItem;