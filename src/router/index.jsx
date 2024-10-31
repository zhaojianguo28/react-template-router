import { lazy } from "react";
import { createBrowserRouter, } from 'react-router-dom'
import Home from "../HomeHighlight";
import About from "../About";
// import Audio from "../"
const Detail = lazy(() => import("../Detail"));
const Audio = lazy(() => import("../pages/audio/Audio"));
const InitAudio = lazy(() => import("../pages/audio/InitAudio"));
const MyIframe = lazy(() => import("../pages/myIframe"));

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
  {
    path: "/audio",
    element: <Audio/>,
  },
  {
    path: "/initaudio",
    element: <InitAudio/>,
  },
  {
    path: "/myIframe",
    element: <MyIframe/>,
  },
])

export default routes;
