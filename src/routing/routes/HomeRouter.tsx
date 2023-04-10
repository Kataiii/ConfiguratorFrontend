import { Outlet } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import ErrorPage from "../layouts/error-page";


const HomeRouter = {
    data : [
        {
            path : '/home',
            element :
                <AuthGuard>
                    <Outlet context={[]}/>
                </AuthGuard>,
            children : [
                
            ]
        },
        // {
        //     path: '*',
        //     element: <ErrorPage/>
        // }
    ]
}

export default HomeRouter;