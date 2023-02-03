import React from "react"
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./components/Home"
import Users from "./components/Blogs/Users"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/users",
        element: <Users/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("root")
);