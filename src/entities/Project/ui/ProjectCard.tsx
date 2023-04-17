import styles from './ProjectCard.module.css'
import { Project } from '../project'
import { useState } from 'react'
import { ConvertionDate } from '../../../shared/common/ConvertionDate'
import IconMenu from '../../../assets/icons/icon-dropdown menu.svg'
import SimpleDropDownMenu from '../../../shared/ui/SimpleDropDownMenu'

interface ProjectCardProps{
    project : Project,
    isActiveMenu : boolean
}

const ProjectCard = (props : {project : Project}) => {
    const [project, setProject] = useState<ProjectCardProps>({
        project : props.project,
        isActiveMenu : false
    })

    const onMouseEnterHandler = () => {
        setProject({
            ...project, isActiveMenu : true
        })
    }

    const onMouseLeaveHandler = () => {
        setProject({
            ...project, isActiveMenu : false
        })
    }

    return(
        <div className={styles.ProjectCardDiv}>
            {
                project.project.preview === null 
                ?
                    <div className={styles.ProjectCardImg}></div>
                :
                    <img className={styles.ProjectCardImg} src={project.project.preview}/>
            }
            <div className={styles.ProjectCardTitleDiv}>
                <h1 className={styles.ProjectCardTitle}>{project.project.name}</h1>
                <div className={styles.ProjectCardContentDiv}>
                    <p className={styles.ProjectCardContent}>{ConvertionDate.convertionDateForProject(project.project.update_date)}</p>
                    <img className={styles.ProjectCardContentImg}
                         src={IconMenu}
                         onMouseEnter={onMouseEnterHandler}
                         onMouseLeave={onMouseLeaveHandler}/>
                </div>
            </div>

            <div className={styles.ProjectCardStatusDiv}>
                <p className={styles.ProjectCardStatusContent}>{project.project.status}</p>
            </div>

            {
                project.isActiveMenu 
                ?
                <div className={styles.SimpleMenuDiv}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}>
                    <SimpleDropDownMenu buttons={[
                            {content : 'Открыть', color : 'white', action : () => {console.log('Открыть')}},
                            {content : 'Отправить', color : 'white', action : () => {console.log('Отправить')}},
                            {content : 'Переименовать', color : 'white', action : () => {console.log('Переименовать')}},
                            {content : 'Создать копию', color : 'white', action : () => {console.log('Создать копию')}},
                            {content : 'Переместить', color : 'white', action : () => {console.log('Переместить')}},
                            {content : 'Отправитель...', color : 'white', action : () => {console.log('Отправитель...')}},
                            {content : 'Удалить', color : 'red', action : () => {console.log('Удалить')}},
                        ]}/>
                </div>
                :
                null
            }
        </div>
    )
}

export default ProjectCard;