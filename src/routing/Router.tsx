import { createBrowserRouter } from "react-router-dom";
import Root from './layouts/root';
import ErrorPage from './layouts/error-page';
import Landing from "../pages/Landing";
import AuthenticationRoutes from "./routes/AuthenticationRoute";
import DocumentsRoutes from "./routes/DocumentsRoute";


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
  AuthenticationRoutes.data[0],
  DocumentsRoutes.data[0]
]);

export default router;