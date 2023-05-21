import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import SignUp from "../Home/Home/SignUp/SignUp";
import AddToy from "../Home/AddToy/AddToy";
import MyToy from "../Home/MyToy/MyToy";
import AllToys from "../Home/AllToys/AllToys";
import Error from "../Home/Error/Error";
import PrivateRoute from "./PrivateRoute";
import ToysDetails from "../Home/MyToy/ToysDetails";
import Blog from "../Home/Home/Blog/Blog";
import Tabular from "../Home/Tabular/Tabular";
import UpdateToys from "../Home/MyToy/UpdateToys";

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
                element: <PrivateRoute><MyToy></MyToy>
                </PrivateRoute>
            },

            {
                path: '/toyDetails/:id',
                element: <PrivateRoute> <ToysDetails></ToysDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toys-market-server-muhammadatiq757.vercel.app/toyDetails/${params.id}`)
            },

            {

                path: '/alltoy',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toys-market-server-muhammadatiq757.vercel.app/alltoy')


            },
            {

                path: '/blog',
                element: <Blog></Blog>

            },

            {
                path: '/tab',
                element: <PrivateRoute>
                    <Tabular></Tabular>
                </PrivateRoute>,
               
            },

            {

               path: '/updateToy/:id',
               element: <UpdateToys></UpdateToys>,
               loader: ({params}) => fetch(`https://toys-market-server-muhammadatiq757.vercel.app/toyDetails/${params.id}`)
            }

        ]
    },
]);


export default router;