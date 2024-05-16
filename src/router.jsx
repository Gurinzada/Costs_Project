import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NewProject from "./Pages/NewProject";
import Projects from "./Pages/Projects";
import Edit from "./Pages/Edit";

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
        }]
    }
])

export default router