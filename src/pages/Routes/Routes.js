import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AddPost from "../AddPost/AddPost"
import AllPost from "../AllPost/AllPost"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Registration from "../Registration/Registration"
import Update from "../Update/Update"
import PrivateRoute from "./PrivateRoute"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/addpost',
                element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
            },
            {
                path: '/allpost',
                element: <PrivateRoute><AllPost></AllPost></PrivateRoute>
            },

            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/update',
                element: <Update></Update>
            },

        ]
    }


])

export default router; 