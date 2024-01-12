import {configureStore} from "@reduxjs/toolkit";
import {usersReducers} from "../features/Users/users-slice.tsx";

export const store = configureStore({
    reducer: {
        users: usersReducers
    },
})

export type Store = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
// export type AppDispatch = ThunkDispatch<Store, unknown, UnknownAction>

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, Store, unknown, UnknownAction>
// export type AppThunk = ThunkAction<void, Store, unknown, UnknownAction>

// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<Store> = useSelector