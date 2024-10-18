import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layouts";
import GamePage from "../pages/GamePage";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },
            {
                path: "games/:id",
                element: <GamePage />
            }
        ]
    }
]);

export default router
