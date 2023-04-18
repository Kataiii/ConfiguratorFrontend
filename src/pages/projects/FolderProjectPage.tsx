import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css";
import ProjectCard from "../../entities/Project/ui/ProjectCard";
import Projects from "../../store/project";
import folder from "../../store/folder";
import { useState, useEffect } from "react";
import { Project } from "../../entities/Project/project";
import { useLocation } from "react-router-dom";


const FolderProjectPage = () => {
    const location = useLocation();
    const [projectsList, setProjectsList] = useState(Projects.apiGetProjectInFolder(folder.findIdFolderByUrl(location.pathname)));
    
    useEffect(() => {
       setProjectsList(Projects.apiGetProjectInFolder(folder.findIdFolderByUrl(location.pathname))) 
       console.log(projectsList); 
    }, [location.pathname])

    const sortProject = (firstProject : Project, secondProject : Project) : number => {
        if(firstProject.update_date > secondProject.update_date) return 1;
        return -1;
    }

    return(
        <div className={styles.DivProjectPage}>
            <BlockAddProjects/>
            <>
                {
                    projectsList.sort(sortProject).map((item, index) => {
                        return <ProjectCard key={item.id} project={item}/>
                    })
                }
            </>
        </div>
    )
}

export default FolderProjectPage;