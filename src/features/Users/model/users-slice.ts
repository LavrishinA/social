import {asyncThunkCreator, buildCreateSlice, PayloadAction} from "@reduxjs/toolkit";
import {UsersApi, UsersListItemArg, UsersListResponse} from "../api/UsersApi";



const initialState: UsersListArg = {
    users: [],
    currentPage: 1,
    pageUserPortion: 15,
    totalUsers: 0,
    isLoading: false,
    error: ""
}

const createUsersSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})


const slice = createUsersSlice({
    name: "users",
    initialState,
    reducers: (creators) => ({
        updateCurrentPage: creators.reducer((state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }),
        updateEntityStatus: creators.reducer((state, action: PayloadAction<{ id: number, status: string }>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id)
            if (index !== -1) {
                state.users[index].entityStatus = action.payload.status
            }
        }),
        fetchUsers: creators.asyncThunk(
            async (arg: { page: number, pageSize: number }) => {
                const res = await UsersApi.getUsers(arg.page, arg.pageSize)
                return res.data as UsersListResponse
            },
            {
                pending: (state) => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.isLoading = false
                    state.users = action.payload.items.map(user => ({...user, entityStatus: "idle"}))
                    state.totalUsers = Number(action.payload.totalCount)
                },
                rejected: (state, action) => {
                    state.isLoading = false
                    state.error = action.error.message

                }
            }
        ),
        followUser: creators.asyncThunk(async (arg: number, thunkAPI) => {
            const {dispatch} = thunkAPI
            dispatch(usersActions.updateEntityStatus({id: arg, status: "loading"}))
            const res = await UsersApi.followUser(arg)
            if (res.data.resultCode === 0) {
                return arg as number
            }
        }, {
            fulfilled: (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload)
                if (index !== -1) {
                    state.users[index].followed = true
                    state.users[index].entityStatus = "succeeded"
                }
            },
            rejected: (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload)
                if (index !== -1) {
                    state.users[index].entityStatus = "failed"
                }
            }
        }),
        unfollowUser: creators.asyncThunk(async (arg: number, thunkAPI) => {
            const {dispatch} = thunkAPI
            dispatch(usersActions.updateEntityStatus({id: arg, status: "loading"}))
            const res = await UsersApi.unfollowUser(arg)
            if (res.data.resultCode === 0) {
                return arg as number
            }
        }, {
            fulfilled: (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload)
                if (index !== -1) {
                    state.users[index].followed = false
                    state.users[index].entityStatus = "succeeded"
                }
            },
            rejected: (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload)
                if (index !== -1) {
                    state.users[index].entityStatus = "failed"
                }
            }
        })

        //  setTotalUsers: (state, action: PayloadAction<number>) => {
        //      state.totalUsers = action.payload
        //  },
        //  follow: (state, action: PayloadAction<number>) => {
        //      const index = state.users.findIndex(user => user.id === action.payload)
        //      if (index !== -1) state.users[index].followed = true
        //  },
        //  unfollow: (state, action: PayloadAction<number>) => {
        //      const index = state.users.findIndex(user => user.id === action.payload)
        //      if (index !== -1) state.users[index].followed = false
        //  },
        //  updateCurrentPage: (state, action: PayloadAction<number>) => {
        //      state.totalUsers = action.payload
        //  },
        // updateStatus: (state, action: PayloadAction<boolean>) => {
        //      state.isLoading = action.payload
        // },


    })
})

export const usersReducers = slice.reducer
export const usersActions = slice.actions

export  type UsersListArg = {
    users: Array<UsersListItemArg & { entityStatus: string }>
    currentPage: number
    pageUserPortion: number
    totalUsers: number
    isLoading: boolean
    error: string | undefined
}

