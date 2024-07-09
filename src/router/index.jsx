import { lazy } from "react";
import { createBrowserRouter, } from 'react-router-dom'
import Home from "../Home";
import About from "../About";
const Detail = lazy(() => import("../Detail"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // children: [

    // ]
  },
  {
    path: "/about",
    element: <About/>,
    // children: [
    // 	{ path: 'demo1', element: <Demo1 />, errorElement: <Loading /> },
    // 	{ path: 'demo2', element: <Demo2 />, errorElement: <Loading /> },
    // ],
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
])

export default routes;
