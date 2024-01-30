import { IFolderProject } from "../../../entities/Folder/FolderProject";
import DropDownItemFolder from "./DropDownItemFolder";
import styles from "./css/DropDownFolder.module.css";

interface DropDownFolderProps {
    folders: IFolderProject[];
    isHide: boolean;
}

const DropDownFolder: React.FC<DropDownFolderProps> = ({ folders, isHide }) => {
    return (
        <ul className={[styles.DivList, isHide ? styles.DivListHide : styles.DivListNotHide].join(' ')}>
            <>
                {
                    folders.map((item, index) => {
                        return <DropDownItemFolder key={item.id} index={index} content={item.name} />
                    })
                }
            </>
        </ul>
    )
}

export default DropDownFolder;