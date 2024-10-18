import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layouts";
import GamePage from "../pages/GamePage";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        errorElement:  <ErrorPage />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },
            {
                path: "games/:slug",
                element: <GamePage />
            }
        ]
    }
]);

export default router
