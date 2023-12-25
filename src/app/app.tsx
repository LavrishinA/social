import {AppLayout} from "../pages/layout/AppLayout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "../pages/Profile/Profile.tsx";
import {Messages} from "../pages/Messages/Messages.tsx";
import {Users} from "../pages/Users/Users.tsx";

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {path: '/', element: <Profile/>},
            {path: '/messages', element: <Messages/>},
            {path: '/users', element: <Users/>}
        ]
    },

])
export const App = () => {
    return <RouterProvider router={router}/>
};