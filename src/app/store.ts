import {configureStore} from "@reduxjs/toolkit";
import {usersReducers} from "features/Users/model/users-slice.tsx";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {profileReducer} from "features/Profile/model/profile-slice.ts";

export const store = configureStore({
    reducer: {
        users: usersReducers,
        profile: profileReducer
    },
})

export type Store = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch:  () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
