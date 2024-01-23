import {useAppDispatch, useAppSelector} from "app/store.ts";
import {useEffect} from "react";
import {UserList, usersActions} from "features/Users";

export const UsersPage = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const isLoading = useAppSelector<boolean>(state => state.users.isLoading)
    const page = useAppSelector<number>(state => state.users.currentPage)
    const pageSize = useAppSelector<number>(state => state.users.pageUserPortion)
    const totalUsers = useAppSelector<number>(state => state.users.totalUsers)

    useEffect(() => {
        dispatch(usersActions.fetchUsers({page, pageSize}))
    }, [dispatch, page, pageSize]);

    const pageNumberHandler = (pageNumber: number) => {
        dispatch(usersActions.updateCurrentPage(pageNumber))

    }

    const followUserHandler = (id:number) => dispatch(usersActions.followUser(id))
    const unfollowUserHandler = (id:number) => dispatch(usersActions.unfollowUser(id))
    return (
        <div>
            <UserList items={users}
                      loading={isLoading}
                      pageSize={pageSize}
                      onChangePage={pageNumberHandler}
                      total={totalUsers}
                      current={page}
                      onFollow={followUserHandler}
                      onUnfollow={unfollowUserHandler}
            />
        </div>
    );
};
