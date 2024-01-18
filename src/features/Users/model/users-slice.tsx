import {asyncThunkCreator, buildCreateSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UsersApi, UsersResponseType} from "features/Users/api/UsersApi.tsx";


const initialState: UserPage = {
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
        fetchUsers: creators.asyncThunk(
            async (arg: {page: number, pageSize: number}) => {
                const res = await UsersApi.getUsers(arg.page, arg.pageSize)
                return res.data as UsersResponseType
            },
            {
                pending: (state) => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.isLoading = false
                    state.users = action.payload.items
                    state.totalUsers = Number(action.payload.totalCount)
                },
                rejected: (state, action) => {
                    state.isLoading = false
                    state.error = action.error.message
                    console.log(action.error.message)
                }
            }
        ),
        updateCurrentPage: creators.reducer((state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
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

export  type UserPage = {
    users: Array<User>
    currentPage: number
    pageUserPortion: number
    totalUsers: number
    isLoading: boolean
    error: string | undefined
}

