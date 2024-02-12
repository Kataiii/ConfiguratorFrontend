import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import Projects from "../../store/projectStore";
import { useMemo, useState } from "react";
import { Project } from "../../entities/Project";
import { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import ProjectCard from "../../features/CardProject/ProjectCard";
import CreateProjectModal from "../../shared/ui/Modals/CreateProjectModal";


const ProjectPage: React.FC = () => {
    const [projectsList, setProjectsList] = useState();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const sortProject = (firstProject : Project, secondProject : Project) : number => {
        if(firstProject.update_date > secondProject.update_date) return 1;
        return -1;
    }

    const clickHandler = () => {
        setIsVisible(isVisible => !isVisible);
    }

    return (
        <div className={styles.DivProjectPage}>
            <BlockAddProjects onClick={clickHandler}/>
            <ProjectCard key={1} project={{id: 1, name: 'Project', folder_id: 1}}/>
            {/* <>
                {
                    projectsList.sort(sortProject).map((item, index) => {
                        return <ProjectCard key={index} project={item}/>
                    })
                }
            </> */}
            {
                isVisible
                ? <CreateProjectModal/>
                : null
            }
        </div>
    )
}

export default ProjectPage;