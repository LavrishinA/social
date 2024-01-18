import {configureStore} from "@reduxjs/toolkit";
import {usersReducers} from "features/Users/model/users-slice.tsx";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        users: usersReducers
    },
})

export type Store = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>

// export type AppDispatch = typeof store.dispatch
// export type AppDispatch = ThunkDispatch<Store, unknown, UnknownAction>

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, Store, unknown, UnknownAction>
// export type AppThunk = ThunkAction<void, Store, unknown, UnknownAction>

// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<Store> = useSelector