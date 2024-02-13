import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import Projects from "../../store/projectStore";
import { useState } from "react";
import { Project } from "../../entities/Project";
import { PopUpMenuItem } from "../../shared/ui/DropDown/PopUpMenu";
import { ColorText } from "../../entities/Enums/ColorTextPopUp";
import ProjectCard from "../../features/CardProject/ProjectCard";
import CreateProjectModal from "../../shared/ui/Modals/CreateProjectModal";
import Portal from "../../shared/ui/Portal";
import TooltipPopover, { Coodinates } from "../../shared/ui/TooltipPopover";


const ProjectPage: React.FC = () => {
    const [projectsList, setProjectsList] = useState();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [coords, setCoords] = useState<Coodinates>({} as Coodinates);

    const sortProject = (firstProject : Project, secondProject : Project) : number => {
        if(firstProject.update_date > secondProject.update_date) return 1;
        return -1;
    }

    const clickHandler = () => {
        setIsVisible(true);
        console.log('1');
    }

    const closeHandler = (e: any) => {
        //TODO отрабатывает сразу как выводится 1
        e.stopPropagation();
        setIsVisible(false);
        console.log('2');
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
                ? <CreateProjectModal closeHandler={closeHandler} />
                : null
            }
        </div>
    )
}

export default ProjectPage;