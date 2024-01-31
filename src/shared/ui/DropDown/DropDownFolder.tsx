import { IFolderProject } from "../../../entities/Folder/FolderProject";
import DropDownItemFolder from "./DropDownItemFolder";
import styles from "./css/DropDownFolder.module.css";
import { useNavigate } from "react-router-dom";

interface DropDownFolderProps {
    folders: IFolderProject[];
    isHide: boolean;
}

const DropDownFolder: React.FC<DropDownFolderProps> = ({ folders, isHide }) => {
    const navigate = useNavigate();
    
    return (
        <ul className={[styles.DivList, isHide ? styles.DivListHide : styles.DivListNotHide].join(' ')}>
            <>
                {
                    folders.map((item, index) => {
                        return <DropDownItemFolder key={item.id} index={index} content={item.name} onClick={() => navigate(`/home/projects/${item.name}`)}/>
                    })
                }
            </>
        </ul>
    )
}

export default DropDownFolder;