import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NewProject from "./Pages/NewProject";
import Projects from "./Pages/Projects";

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
        }]
    }
])

export default router