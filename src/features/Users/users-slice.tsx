import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../api/api.tsx";


const initialState: UserPage = {
    users: [],
    currentPage: 1,
    pageUserPortion: 20,
    totalUsers: 0,
    isLoading: false
}

const slice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...action.payload]
        },
        setTotalUsers: (state, action: PayloadAction<number>) => {
            state.totalUsers = action.payload
        },
        follow: (state, action: PayloadAction<number>) => {
            const index = state.users.findIndex(user => user.id === action.payload)
            if (index !== -1) state.users[index].followed = true
        },
        unfollow: (state, action: PayloadAction<number>) => {
            const index = state.users.findIndex(user => user.id === action.payload)
            if (index !== -1) state.users[index].followed = false
        },
        updateCurrentPage: (state, action: PayloadAction<number>) => {
            state.totalUsers = action.payload
        },
       updateStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
       }


    }
})

export const usersReducers = slice.reducer
export const usersActions = slice.actions

export  type UserPage = {
    users: Array<User>
    currentPage: number
    pageUserPortion: number
    totalUsers: number
    isLoading: boolean
}

