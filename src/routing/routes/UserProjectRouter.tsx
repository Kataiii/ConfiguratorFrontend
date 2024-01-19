import Root from "../layouts/developmentArea";
import ErrorPage from "../layouts/error-page";
import ProjectPage from "../../pages/projects/ProjectPage";
import FolderProjectPage from "../../pages/projects/FolderProjectPage";
import ConfiguratorPage from "../../pages/projects/ConfiguratorPage";

const UserProjectRouter = {
    path: '/home',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/home/',
            element: <ProjectPage />,
        },
        {
            path: "/home/projects/folders/:name_folder",
            element: <FolderProjectPage />
        },
        {
            path: '/home/renders',
            element: <ProjectPage />,
            children: [
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

export default UserProjectRouter;