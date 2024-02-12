import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import Projects from "../../store/projectStore";
import folder from "../../store/folderStore";
import { useState, useEffect, useMemo } from "react";
import { Project } from "../../entities/Project";
import { useLocation } from "react-router-dom";
import { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import ProjectCard from "../../features/CardProject/ProjectCard";


const FolderProjectPage: React.FC = () => {
    const location = useLocation();
    // const [projectsList, setProjectsList] = useState(Projects.apiGetProjectInFolder(folder.findIdFolderByUrl(location.pathname)));
    
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
        },
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
    
    useEffect(() => {
    //    setProjectsList(Projects.apiGetProjectInFolder(folder.findIdFolderByUrl(location.pathname)))  
    }, [location.pathname]);

    const clickHandler = () => {

    }

    const sortProject = (firstProject : Project, secondProject : Project) : number => {
        if(firstProject.update_date > secondProject.update_date) return 1;
        return -1;
    }

    return(
        <div className={styles.DivProjectPage}>
            <BlockAddProjects onClick={clickHandler}/>
            <>
                {
                    // projectsList.sort(sortProject).map((item, index) => {
                    //     return <ProjectCard key={item.id} project={item} isActiveMenu={false} itemsMenu={itemMenuProject}/>
                    // })
                }
            </>
        </div>
    )
}

export default FolderProjectPage;