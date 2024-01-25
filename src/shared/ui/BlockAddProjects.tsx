import AddProject from "../../assets/icons/icon-create-project.svg"
import styles from "./css/BlockCard.module.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

interface BlockAddProjectsProps{
    onClick: () => void;
}

const BlockAddProjects: React.FC<BlockAddProjectsProps> = ({onClick}) => {
    return(
        <div className={styles.DivBlockCard} onClick={onClick}>
            <img className={styles.ImgBlockCard} src={AddProject}></img>
        </div>
    )
}

export default BlockAddProjects;