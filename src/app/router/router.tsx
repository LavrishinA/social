import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../../pages/layout/AppLayout.tsx";
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage.tsx";
import {MessagesPage} from "../../pages/MessagesPage/MessagesPage.tsx";
import {UsersPage} from "../../pages/UsersPage/UsersPage.tsx";




export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {path: '/', element: <ProfilePage/>},
            {path: '/messages', element: <MessagesPage/>},
            {path: '/users', element: <UsersPage/>}
        ]
    },

])