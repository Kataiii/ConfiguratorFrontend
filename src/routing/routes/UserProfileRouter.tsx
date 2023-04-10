import Root from "../layouts/profile";
import ErrorPage from "../layouts/error-page";
import UserProfile from "../../pages/user_profile/UserProfile";
import UserLicence from "../../pages/user_profile/UserLicence";

const UserProfileRouter = {
    data: [
        {
            path: '/home/profile',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '',
                    element: <UserProfile />,
                },
                {
                    path: "/home/profile/licence",
                    element: <UserLicence />
                }
            ]
        }
    ]
}

export default UserProfileRouter;