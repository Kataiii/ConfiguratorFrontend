import { Outlet } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import ErrorPage from "../layouts/error-page";
import UserProjectRouter from "./UserProjectRouter";
import UserProfileRouter from "./UserProfileRouter";
import ConfiguratorPage from "../../pages/projects/ConfiguratorPage";


const HomeRouter = {
    path: '/home',
    element:
        <AuthGuard>
            <Outlet context={[]} />
        </AuthGuard>,
    children: [
        UserProjectRouter.data[0],
        UserProfileRouter.data[0],
        {
            path: "/home/configurator/project/:id",
            element: <ConfiguratorPage />
        },
    ]
}

export default HomeRouter;