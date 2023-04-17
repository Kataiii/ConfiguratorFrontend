import BlockAddProjects from "../../shared/ui/BlockAddProjects";
import styles from "../../app/App.module.css"
import ProjectCard from "../../entities/Project/ui/ProjectCard";
import { Project } from "../../entities/Project/project";


const ProjectPage = () => {
    return (
        <div className={styles.DivProjectPage}>
            <BlockAddProjects/>
            <ProjectCard project={new Project(1, 'Дом', 1, 1, 'house')}/>
        </div>
    )
}

export default ProjectPage;