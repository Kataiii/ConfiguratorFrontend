import { Link } from "react-router-dom";
import App from "../../shared/ui/Breadcrumb";



const ProjectPage = () => {
    const title = {
        title: <Link to="/home">{">"} Все проекты</Link>,
        key: "all_projects"
      }

    return (
        <div>
            <div>
                <App title={title}/>
            </div>
        </div>
    )
}

export default ProjectPage;