import Root from "../layouts/developmentArea";
import ErrorPage from "../layouts/error-page";
import ProjectPage from "../../pages/projects/ProjectPage";
import UnsortedProjectPage from "../../pages/projects/UnsortedProjectPage";
import FolderProjectPage from "../../pages/projects/FolderProjectPage";
import ConfiguratorPage from "../../pages/projects/ConfiguratorPage";

const UserProjectRouter = {
    data: [
        {
            /*Projects */
            path: '/home',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                // {
                //     path: '/',
                //     element: <ProjectPage />,
                // },
                {
                    path: '/home/projects',
                    element: <ProjectPage />,
                    children:[
                        {
                            path: "/home/projects/unsorted",
                            element: <UnsortedProjectPage />
                        },
                        {
                            path: "/home/projects/folders/:name_folder",
                            element: <FolderProjectPage />
                        }
                    ]
                },
                {
                    path: '/home/renders',
                    element: <ProjectPage />,
                    children:[
                        {
                            path: "/home/renders/unsorted",
                            element: <UnsortedProjectPage />
                        },
                        {
                            path: "/home/renders/folders/:name_folder",
                            element: <FolderProjectPage />
                        },
                        {
                            path: "/home/renders/project/:id",
                            element: <ConfiguratorPage />
                        }
                    ]
                }
            ]
        }
    ]
}

export default UserProjectRouter;