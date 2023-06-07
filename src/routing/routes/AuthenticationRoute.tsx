import Login from '../layouts/login';
import ErrorPage from '../layouts/error-page';
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import UserRegistPage from "../../pages/UserRegistrationPage";
import CompanyRegistPage from "../../pages/CompanyRegistrationPage";
import RecoveryPasPage from '../../pages/RecoveryPasPage';
import ResetPasPage from '../../pages/ResetPasPage';


const AuthenticationRoutes = {
  path: '/login',
  element: <Login />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/login/register',
      element: <RegistrationPage />
    },
    {
      path: '/login/register/user',
      element: <UserRegistPage />
    },
    {
      path: '/login/register/company',
      element: <CompanyRegistPage />
    },
    {
      path: '/login/recovery',
      element: <RecoveryPasPage />
    },
    {
      path: '/login/reset/:link',
      element: <ResetPasPage />
    }
  ]
}

export default AuthenticationRoutes;