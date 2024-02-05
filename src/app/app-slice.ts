import {asyncThunkCreator, buildCreateSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {authActions} from "features/Auth";

const createAppSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState: AppSlice = {
    isInitialized: false,
    isLoading: false
}

const slice = createAppSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(isFulfilled(authActions.isAuthorized), (state) => {
            state.isInitialized = true
        }).addMatcher(isPending, (state) => {
        state.isLoading = true
        }).addMatcher(isFulfilled, (state) => {
            state.isLoading = false
        }).addMatcher(isRejected, (state) => {
            state.isLoading = false
        })
    },
    selectors: {
        isInitialized: (state) => state.isInitialized,
        isLoadingApp: (state) => state.isLoading
    }

})

export const appReducer = slice.reducer
export const appSelectors = slice.selectors

type AppSlice = {
    isInitialized: boolean
    isLoading: boolean
}