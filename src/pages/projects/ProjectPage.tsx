import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import { useContext, useState } from "react";
import ProjectCard from "../../features/CardProject/ProjectCard";
import CreateProjectModal from "../../shared/ui/Modals/CreateProjectModal";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IProject } from "../../entities/Project";


const ProjectPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {projectStore} = useContext(Context);

    const sortProject = (firstProject : IProject, secondProject : IProject) : number => {
        if(firstProject.updatedAt > secondProject.updatedAt) return 1;
        return -1;
    }

    const clickHandler = () => {
        setIsVisible(true);
    }

    const closeHandler = (e: any) => {
        e.stopPropagation();
        setIsVisible(false);
    }

    return (
        <div className={styles.DivProjectPage}>
            <BlockAddProjects onClick={clickHandler}/>
            <>
                {
                    projectStore.getProjects().map((item, index) => {
                        return <ProjectCard key={index} project={item}/>
                    })
                }
            </>
            {
                isVisible
                ? <CreateProjectModal closeHandler={closeHandler} />
                : null
            }
        </div>
    )
})

export default ProjectPage;