import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/root';
import Login from './layouts/login';
import ErrorPage from './layouts/error-page';
import path from "path";
import Landing from "../pages/Landing";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
        {
            path: '/',
            element: <Landing/>
        }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  }
]);

export default router;