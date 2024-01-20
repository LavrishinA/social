import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";
import {AuthApi, AuthData} from "features/Auth/api/AuthApi.ts";

const createAuthSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState = {
    user: {} as AuthData,
    isLoading: false as boolean,
    error: ""
}

const slice = createAuthSlice({
    name: "auth",
    initialState,
    reducers: (create) => ({
        isAuthorized: create.asyncThunk(async (_arg: undefined, thunkAPI) => {
            const {rejectWithValue} = thunkAPI
            const res = await AuthApi.isAuth()
            if (res.data.resultCode === 0) {
                return res.data.data as AuthData
            } else {
                return rejectWithValue(null)
            }

        }, {
            fulfilled: (state, action) => {
                state.user = {...action.payload}
            }
        })
    })
})

export const authReducer = slice.reducer
export const authActions = slice.actions

