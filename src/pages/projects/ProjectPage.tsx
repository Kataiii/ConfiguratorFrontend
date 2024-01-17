import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import Projects from "../../store/project";
import { useMemo, useState } from "react";
import { Project } from "../../entities/Project/Project";
import { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import ProjectCard from "../../features/CardProject/ProjectCard";


const ProjectPage: React.FC = () => {
    const [projectsList, setProjectsList] = useState(Projects.apiGetAllProjectsForUser())

    const itemMenuProject: PopUpMenuItem[] = useMemo<PopUpMenuItem[]>(() =>  [
        {
          content: 'Открыть',
          action: () => console.log('Открыть'),
          color: ColorText.White
        },
        {
          content: 'Отправить на просчет',
          action: () => console.log('Отправить на просчет'),
          color: ColorText.White
        }
        ,
        {
            content: 'Переименовать',
            action: () => console.log('Переименовать'),
            color: ColorText.White
        },
        {
            content: 'Создать копию',
            action: () => console.log('Создать копию'),
            color: ColorText.White
        },
        {
            content: 'Переместить',
            action: () => console.log('Переместить'),
            color: ColorText.White
        },
        {
          content: 'Удалить',
          action: () => console.log('Удалить'),
          color: ColorText.Red
        }
      ], [])

    const sortProject = (firstProject : Project, secondProject : Project) : number => {
        if(firstProject.update_date > secondProject.update_date) return 1;
        return -1;
    }

    return (
        <div className={styles.DivProjectPage}>
            <BlockAddProjects/>
            <>
                {
                    projectsList.sort(sortProject).map((item, index) => {
                        return <ProjectCard key={index} project={item} isActiveMenu={false} itemsMenu={itemMenuProject}/>
                    })
                }
            </>
        </div>
    )
}

export default ProjectPage;