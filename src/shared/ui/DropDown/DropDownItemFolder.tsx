import styles from "./css/DropDownFolder.module.css";


interface DropDownItemFolderProps{
    content: string;
    index: number;
}

const DropDownItemFolder: React.FC<DropDownItemFolderProps> = ({content}) => {
    return(
        <li className={styles.ItemList}>{content}</li>
    )
}

export default DropDownItemFolder;