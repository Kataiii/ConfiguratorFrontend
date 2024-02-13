import { createBrowserRouter } from "react-router-dom";
import Root from './layouts/root';
import ErrorPage from './layouts/error-page';
import Landing from "../pages/Landing";
import AuthenticationRoutes from "./routes/AuthenticationRoute";
import DocumentsRoutes from "./routes/DocumentsRoute";
import HomeRouter from "./routes/HomeRouter";
import ChatsRoute from "./routes/ChatsRoute";
import ConfiguratorPage from "../pages/projects/ConfiguratorPage";


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Landing />
			}
		]
	},
	{
		path: "/home/configurator/:name_folder/:name_project",
		element: <ConfiguratorPage />
	},
	AuthenticationRoutes,
	DocumentsRoutes,
	HomeRouter,
	ChatsRoute
]);

export default router;