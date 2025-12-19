
import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../component/Home/Home";
import { Apps } from "../component/Apps/Apps";
import { Installation } from "../component/Installation/Installation";
import { CardDetails } from "../component/CardDetails/CardDetails";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
children:[
    {
        index:true, Component:Home,
    },
    {
        path:"Apps",
        Component:Apps
    },
    {
        path:"Installation",
        Component:Installation
    },
    {
        path:"Apps",
        Component:Apps
    },{
        path:"/CardDetails/:id",
        Component:CardDetails
    },
    {
        path:"*",
        Component:Error
    }
]

  },
]);