import {NavLink} from "react-router-dom";

export const items = [
    {
        key: '/profile',
        label: <NavLink to='/profile'>Profile</NavLink>,

    },
    {
        key: '/messages',
        label: <NavLink to='/messages'>Messages</NavLink>,

    },
    {
        key: '/users',
        label: <NavLink to='/users'>Users</NavLink>,
    }

]