import Root from "../layouts/developmentArea";
import ErrorPage from "../layouts/error-page";
import ProjectPage from "../../pages/projects/ProjectPage";
import FolderProjectPage from "../../pages/projects/FolderProjectPage";
import LoadingPage from "../../pages/LoadingPage";

const UserProjectRouter = {
    path: "/home",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/home/projects",
            element: <ProjectPage />,
            children: [
                {
                    path: "/home/projects/:name_folder",
                    element: <ProjectPage/>
                }
            ]
        },
        {
            path: "/home/renders",
            element: <FolderProjectPage />,
            children: [
                {
                    path: "/home/renders/:name:folder",
                    //TODO переделать потом в страницу для рендеров
                    element: <FolderProjectPage/>
                },
                {
                    //TODO сделать другой элемент или убрать совсем
                    path: "/home/renders/:name_folder/:name_render",
                    element: <LoadingPage/>
                }
            ]
        }
    ]
}

export default UserProjectRouter;