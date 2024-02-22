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
import { runInAction } from "mobx";


const ProjectPage: React.FC = observer(() => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {store, projectStore, folderStore} = useContext(Context);
    const locate = useLocation();
    const divRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState<number>(1);

    const [fetchProjects, isProjectsLoading, projectsError] = useFetching(async () => {
        let response: ProjectResponse[] = [];
        if(locate.pathname === "/home/projects"){
            response = await ProjectService.getAllProjectsPagination(store.getActiveRole()?.id ?? -1, page, projectStore.limit);
        }
        else{
            if(folderStore.getAciveFolder() == null){
                folderStore.setActiveFolder(folderStore.getFoldersProject().find(item => item.id === Number(localStorage.getItem("activeFolderId"))) ?? null);
            }
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
    }, [page, locate]);

    useEffect(() => {
        projectStore.setProjects([]);
        setPage(1);
        const role_id = store.getActiveRole()!.id;
        let response;
        if(locate.pathname === "/home/projects"){
            response = ProjectService.countAllProjects(role_id);
        }
        else{
            const folder_id = folderStore.getAciveFolder()!.id;
            response = ProjectService.countAllProjectsInFolder(folder_id);
        }
        response.then(response => {
            runInAction(() => {
                projectStore.setCountProjects(response);
                projectStore.totalPage = Math.ceil(projectStore.getCountProjects() / projectStore.limit);
            })
        })
    }, [locate.pathname]);

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
                folderStore.getAciveFolder()?.name === "Корзина"
                ? <p className={styles.BacketContent}>Файлы в корзине хранятся 30 дней, после чего они удаляются <p className={styles.BacketBorderContent}>навсегда</p></p>
                : null
            }
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