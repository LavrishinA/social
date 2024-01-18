import {createBrowserRouter, Navigate} from "react-router-dom";

import {MessagesPage, ProfilePage, UsersPage} from "pages";
import {AppLayout} from "app/layout/AppLayout.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            { index: true, element: <Navigate to="/profile/:id" replace /> },
            {path: '/profile/:id', element: <ProfilePage/>},
            {path: '/messages', element: <MessagesPage/>},
            {path: '/users', element: <UsersPage/>}
        ]
    },

])