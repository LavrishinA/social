import {useAppDispatch, useAppSelector} from "app/store.ts";
import {User} from "features/Users/api/UsersApi.tsx";
import {useEffect} from "react";
import {usersActions} from "features/Users/model/users-slice.tsx";
import {UserList} from "features/Users/ui/UserList/UserList.tsx";

export const UsersPage = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector<User[]>(state => state.users.users)
    const isLoading = useAppSelector<boolean>(state => state.users.isLoading)
    const page = useAppSelector<number>(state => state.users.currentPage)
    const pageSize = useAppSelector<number>(state => state.users.pageUserPortion)
    const totalUsers = useAppSelector<number>(state => state.users.totalUsers)

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
