import AddProject from "../../assets/icons/icon-create-project.svg"
import styles from "./css/BlockCard.module.css"
import { useNavigate, useLocation } from "react-router-dom"

const BlockAddProjects = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const onCLickHandler = () => {
        navigate('/home/configurator/project/untitled');
    }

    return(
        <div className={styles.DivBlockCard} onClick={onCLickHandler}>
            <img className={styles.ImgBlockCard} src={AddProject}></img>
        </div>
    )
}

export default BlockAddProjects;