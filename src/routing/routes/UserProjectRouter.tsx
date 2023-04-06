import Root from "../layouts/developmentArea";
import ErrorPage from "../layouts/error-page";
import ProjectPage from "../../pages/projects/ProjectPage";
import UnsortedProjectPage from "../../pages/projects/UnsortedProjectPage";
import FolderProjectPage from "../../pages/projects/FolderProjectPage";
import ConfiguratorPage from "../../pages/projects/ConfiguratorPage";


const UserProjectRouter = {
    data : [
        {
            /*Development Area */
            path : '/projects',
            element : <Root/>,
            errorElement: <ErrorPage />,
            children : [
                {
                    /*Projects */
                    path: '/projects',
                    element: <ProjectPage/>,
                    errorElement: <ErrorPage />,
                    children : [
                        {
                            path: "/projects/unsorted",
                            element: <UnsortedProjectPage/>
                        },
                        {
                            path: "/project/:name_folder",
                            element: <FolderProjectPage/>
                        },
                        {
                            path: "/project/:name_folder/:id",
                            element: <ConfiguratorPage/>
                        }
                    ]
                },
                {
                    /*Renders */
                }
            ]
        }
    ]
}

export default UserProjectRouter;