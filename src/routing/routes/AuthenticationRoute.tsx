import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Root from '../layouts/root';
  import Login from '../layouts/login';
  import ErrorPage from '../layouts/error-page';
  import path from "path";
  import LoginPage from "../../pages/LoginPage";
  import RegistrationPage from "../../pages/RegistrationPage";
  import UserRegistPage from "../../pages/UserRegistrationPage";
  import CompanyRegistPage from "../../pages/CompanyRegistrationPage";
  import PDFPage from "../../pages/PDFPage";


const AuthenticationRoutes = {data: [
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: '/login',
            element: <LoginPage/>
          },
          {
            path: '/login/register',
            element: <RegistrationPage/>
          },
          {
            path: '/login/register/user',
            element: <UserRegistPage/>
          },
          {
            path: '/login/register/company',
            element: <CompanyRegistPage/>
          }
        ]
      }
]
}

export default AuthenticationRoutes;