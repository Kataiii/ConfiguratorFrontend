import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css"
import ProjectCard from "../../entities/Project/ui/ProjectCard";
import Projects from "../../store/project";
import { useState } from "react";
import { Project } from "../../entities/Project/project";


const ProjectPage = () => {
    const [projectsList, setProjectsList] = useState(Projects.apiGetAllProjectsForUser())

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
                        return <ProjectCard key={index} project={item}/>
                    })
                }
            </>
        </div>
    )
}

export default ProjectPage;