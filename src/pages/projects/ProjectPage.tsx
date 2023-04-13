import { Link } from "react-router-dom";
import BreadApp from "../../shared/ui/Breadcrumb";



const ProjectPage = () => {
    const title = {
        title: <Link to="/home">{">"} Все проекты</Link>,
        key: "all_projects"
    }

    return (
        <div>
            <p>Project Page</p>
            {/* <div>
                <BreadApp title={title}/>
            </div> */}
        </div>
    )
}

export default ProjectPage;