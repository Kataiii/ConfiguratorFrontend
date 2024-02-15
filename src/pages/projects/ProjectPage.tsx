import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../css/ProjectPage.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import ProjectCard from "../../features/CardProject/ProjectCard";
import CreateProjectModal from "../../shared/ui/Modals/CreateProjectModal";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IProject } from "../../entities/Project";
import { useLocation } from "react-router-dom";
import ProjectService from "../../store/services/ProjectService";
import { useFetching } from "../../shared/hooks/UseFetching";
import { ConvertionProjects } from "../../shared/common/ConvertionProjects";
import { useObserver } from "../../shared/hooks/UseObserver";
import { ProjectResponse } from "../../entities/Response/CreateProjectResponse";


const ProjectPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {store, projectStore, folderStore} = useContext(Context);
    const locate = useLocation();
    const divRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState<number>(1);

    const [fetchProjects, isProjectsLoading, projectsError] = useFetching(async () => {
        let response: ProjectResponse[] = [];
        if(locate.pathname === "/home/projects"){
            response = await ProjectService.getAllProjectsPagination(store.getActiveRole()!.id, page, projectStore.limit);
        }
        else{
            response = await ProjectService.getProjectsByFolderPagination(folderStore.getAciveFolder()!.id, page, projectStore.limit);
        }
        const user_id = store.getAccount().id;
        const projects: IProject[] = ConvertionProjects.convertInProject(response, user_id);
        projectStore.setProjects([...projectStore.getProjects(), ...projects]);
    });

    useObserver(divRef, page < projectStore.totalPage, isProjectsLoading, () => {
        setPage(page => page + 1);
    });

    useEffect(() => {
        fetchProjects();
    }, [page]);

    useEffect(() => {
        projectStore.setProjects([]);
        setPage(1);
        const role_id = store.getActiveRole()!.id;
        if(locate.pathname === "/home/projects"){
            const response = ProjectService.countAllProjects(role_id);
            response.then(response => {
                projectStore.setCountProjects(response);
                projectStore.totalPage = Math.ceil(projectStore.getCountProjects() / projectStore.limit);
            });
        }
        else{
            const folder_id = folderStore.getAciveFolder()!.id;
            const response = ProjectService.countAllProjectsInFolder(folder_id);
            response.then(response => {
                projectStore.setCountProjects(response);
                projectStore.totalPage = Math.ceil(projectStore.getCountProjects() / projectStore.limit);
            })
        }
    }, [locate.pathname])

    // const sortProject = (firstProject : IProject, secondProject : IProject) : number => {
    //     if(firstProject.updatedAt > secondProject.updatedAt) return 1;
    //     return -1;
    // }

    const clickHandler = () => {
        setIsVisible(true);
    }

    const closeHandler = (e: any) => {
        e.stopPropagation();
        setIsVisible(false);
    }

    return (
        <div>
            {
                isProjectsLoading
                ? <p>Загрузка</p>
                : null
            }
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
            <div ref={divRef} className={styles.DivLastElement}></div>
        </div>
    )
})

export default ProjectPage;