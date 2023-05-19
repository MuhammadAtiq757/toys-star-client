import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import SignUp from "../Home/Home/SignUp/SignUp";
import AddToy from "../Home/AddToy/AddToy";
import MyToy from "../Home/MyToy/MyToy";
import AllToys from "../Home/AllToys/AllToys";
import Error from "../Home/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },


            {
                path: '/addToy',
                element: <AddToy></AddToy>

            },

            {
                path: '/myToy',
                element: <MyToy></MyToy>

            },

            {

                path: '/alltoy',
                element: <AllToys></AllToys>


            },
            // {
            //     path: "*",
            //     element: <img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" alt="" />
            // }

        ]
    },
]);


export default router;