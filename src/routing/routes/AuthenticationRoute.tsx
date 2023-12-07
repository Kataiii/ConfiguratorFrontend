import Login from '../layouts/login';
import ErrorPage from '../layouts/error-page';
import LoginPage from "../../pages/auth/LoginPage";
import RegistrationPage from "../../pages/auth/RegistrationPage";
import UserRegistPage from "../../pages/auth/UserRegistrationPage";
import CompanyRegistPage from "../../pages/auth/CompanyRegistrationPage";
import RecoveryPasPage from '../../pages/auth/RecoveryPasPage';
import ResetPasPage from '../../pages/auth/ResetPasPage';
import ChooseRoleRage from '../../pages/auth/ChooseRolePage';


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
    },
    {
      path: '/login/choose_role',
      element: <ChooseRoleRage/>
    }
  ]
}

export default AuthenticationRoutes;