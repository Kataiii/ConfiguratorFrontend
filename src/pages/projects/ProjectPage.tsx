import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import { useContext, useEffect, useState } from "react";
import ProjectCard from "../../features/CardProject/ProjectCard";
import CreateProjectModal from "../../shared/ui/Modals/CreateProjectModal";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IProject } from "../../entities/Project";
import { useLocation } from "react-router-dom";
import ProjectService from "../../store/services/ProjectService";


const ProjectPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {store, projectStore, folderStore} = useContext(Context);
    const locate = useLocation();

    useEffect(() => {
        const role_id = store.getActiveRole()!.id;
        if(locate.pathname === "/home/projects"){
            const response = ProjectService.countAllProjects(role_id);
            response.then(response => {
                projectStore.setCountProjects(response);
            });
        }
        else{
            const folder_id = folderStore.getAciveFolder()!.id;
            const response = ProjectService.countAllProjectsInFolder(folder_id);
            response.then(response => {
                projectStore.setCountProjects(response);
            })
        }
    }, [locate.pathname])

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