import styles from './ProjectCard.module.css'
import { Project } from '../project'
import { useState } from 'react'
import { ConvertionDate } from '../../../shared/common/ConvertionDate'
import IconMenu from '../../../assets/icons/icon-dropdown menu.svg'
import { useNavigate } from 'react-router-dom'
import PopUpMenu, { PopUpMenuItem } from '../../../shared/ui/DropDown/PopUpMenu'

interface ProjectCardProps{
    project : Project;
    isActiveMenu : boolean;
    itemsMenu: PopUpMenuItem[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({project, isActiveMenu, itemsMenu}) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(isActiveMenu)

    const onMouseEnterHandler = () => {
        setIsActive(true);
    }

    const onMouseLeaveHandler = () => {
        setIsActive(false);
    }

    const onClickHandler = () => {
        navigate('/home/configurator/project/' + project.name_translate)
    }

    return(
        <div className={styles.ProjectCardDiv}>
            {
                project.preview === null || project.preview === undefined 
                ?
                    <div className={styles.ProjectCardImg} onClick={onClickHandler}></div>
                :
                    <img className={styles.ProjectCardImg} src={project.preview} onClick={onClickHandler}/>
            }
            <div className={styles.ProjectCardTitleDiv}>
                <h1 className={styles.ProjectCardTitle}>{project.name}</h1>
                <div className={styles.ProjectCardContentDiv}>
                    <p className={styles.ProjectCardContent}>{ConvertionDate.convertionDateForProject(project.update_date)}</p>
                    <img className={styles.ProjectCardContentImg}
                         src={IconMenu}
                         onMouseEnter={onMouseEnterHandler}
                         onMouseLeave={onMouseLeaveHandler}/>
                </div>
            </div>

            <div className={styles.ProjectCardStatusDiv}>
                <p className={styles.ProjectCardStatusContent}>{project.status}</p>
            </div>

            {
                isActive 
                ?
                <div className={styles.SimpleMenuDiv}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}>
                        <PopUpMenu items={itemsMenu} isFixedLeft={true}/>
                </div>
                :
                null
            }
        </div>
    )
}

export default ProjectCard;