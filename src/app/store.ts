import {configureStore} from "@reduxjs/toolkit";
import {usersReducers} from "features/Users/model/users-slice.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {profileReducer} from "features/Profile/model/profile-slice.ts";
import {authReducer} from "features/Auth/model/auth-slice.ts";

export const store = configureStore({
    reducer: {
        users: usersReducers,
        profile: profileReducer,
        auth: authReducer
    },
})

export type Store = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
