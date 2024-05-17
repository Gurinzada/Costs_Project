import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NewProject from "./Pages/NewProject";
import Projects from "./Pages/Projects";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Statistics from "./Pages/Statistic";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[{
            index:true,
            element:<Home/>
        },{
            element:<NewProject/>,
            path: "newProject"
        },{
            element:<Projects/>,
            path:"projects"
        },{
            element:<Edit/>,
            path:"projects/update/:IDproject"
        },{
            element: <NotFound/>,
            path:"*"
        },{
            element:<Statistics/>,
            path:"statistic"
        }]
    }
])

export default router