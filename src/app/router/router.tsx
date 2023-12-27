import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../../pages/layout/AppLayout.tsx";
import Profile from "../../pages/Profile/Profile.tsx";
import {Messages} from "../../pages/Messages/Messages.tsx";
import {Users} from "../../pages/Users/Users.tsx";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {path: '/', element: <Profile/>},
            {path: '/messages', element: <Messages/>},
            {path: '/users', element: <Users/>}
        ]
    },

])