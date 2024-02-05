import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {authReducer} from "features/Auth";
import {profileReducer} from "features/Profile";
import {usersReducers} from "features/Users";
import {appReducer} from "app/app-slice.ts";


export const store = configureStore({
    reducer: {
        users: usersReducers,
        profile: profileReducer,
        auth: authReducer,
        app: appReducer
    },
})

export type Store = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector
