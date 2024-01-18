import {useEffect} from 'react';
import {Store, useAppDispatch} from "app/store.ts";
import {useSelector} from "react-redux";
import {usersActions} from "features/Users/model/users-slice.tsx";
import {UserList} from "./UserList.tsx";
import {User} from "features/Users/api/UsersApi.tsx";

const Users = () => {

    const dispatch = useAppDispatch()

    const users = useSelector<Store, User[]>(state => state.users.users)
    const isLoading = useSelector<Store, boolean>(state => state.users.isLoading)
    const page = useSelector<Store, number>(state => state.users.currentPage)
    const pageSize = useSelector<Store, number>(state => state.users.pageUserPortion)
    const totalUsers = useSelector<Store, number>(state => state.users.totalUsers)

    useEffect(() => {
        dispatch(usersActions.fetchUsers({page, pageSize}))
    }, [dispatch, page, pageSize]);

    const pageNumberHandler = (pageNumber: number) => {
        dispatch(usersActions.updateCurrentPage(pageNumber))
        dispatch(usersActions.fetchUsers({page, pageSize}))
    }
    return (
        <div>
            <UserList items={users}
                      loading={isLoading}
                      pageSize={pageSize}
                      onChangePage={pageNumberHandler}
                      total={totalUsers}
                      current={page}
            />
        </div>
    );
};

export default Users;