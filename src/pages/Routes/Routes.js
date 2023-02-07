import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AddPost from "../AddPost/AddPost"
import Home from "../Home/Home"
import Login from "../Login/Login"
import Registration from "../Registration/Registration"
import Update from "../Update/Update"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <Home></Home>,

            },
            {
                path: '/addpost',
                element: <AddPost></AddPost>
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
            }
        ]
    }


])

export default router; 