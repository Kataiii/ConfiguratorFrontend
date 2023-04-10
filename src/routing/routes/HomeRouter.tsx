import { Outlet } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import ErrorPage from "../layouts/error-page";
import UserProjectRouter from "./UserProjectRouter";


const HomeRouter = {
    data : [
        {
            path : '/home',
            element :
                <AuthGuard>
                    <Outlet context={[]}/>
                </AuthGuard>,
            children : [
                UserProjectRouter.data[0]
            ]
        },
        // {
        //     path: '*',
        //     element: <ErrorPage/>
        // }
    ]
}

export default HomeRouter;