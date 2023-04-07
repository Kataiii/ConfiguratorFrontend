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
                            path: "/projects/folders/:name_folder",
                            element: <FolderProjectPage/>
                        },
                        {
                            path: "/projects/project/:id",
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