import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";
import {AuthApi, AuthData} from "features/Auth/api/AuthApi.ts";
import {FieldType} from "features/Auth/ui/Login.tsx";

const createAuthSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState = {
    user: {} as AuthData,
    isAuth: false as boolean,
    isLoading: false,
    error: null as string | null
}

const slice = createAuthSlice({
    name: "auth",
    initialState,
    reducers: (create) => {
        const createAThunk =
            create.asyncThunk.withTypes<{ rejectValue: { error: string } }>()
        return {
            isAuthorized: createAThunk(async (_arg: undefined, thunkAPI) => {
                const {rejectWithValue} = thunkAPI

                const res = await AuthApi.isAuth()
                if (res.data.resultCode === 0) {
                    return res.data.data as AuthData
                } else {
                    return rejectWithValue({error: res.data.messages[0]})
                }


            }, {
                pending: (state) => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.user = {...action.payload}
                    state.isAuth = true
                },
                rejected: (state, action) => {
                    if (action.payload) {
                        state.error = action.payload.error
                    }

                },
                settled: (state) => {
                    state.isLoading = false
                }
            }),
            login: createAThunk(async (arg: FieldType, {rejectWithValue}) => {
                const res = await AuthApi.login(arg)
                if (res.data.resultCode === 0) {
                    return {isAuth: true, id: res.data.data.userId}
                } else {
                    return rejectWithValue({error: res.data.messages[0]})
                }
            }, {
                fulfilled: (state, action) => {
                    state.isAuth = action.payload.isAuth
                    state.user.id = action.payload.id
                }
            }),
            logout: createAThunk(async (_arg: undefined, {rejectWithValue}) => {
                const res = await AuthApi.logout()
                if (res.data.resultCode === 0) {
                    return {isAuth: false}
                } else {
                    return rejectWithValue({error: res.data.messages[0]})
                }
            }, {
                fulfilled: (state, action) => {
                    state.isAuth = action.payload.isAuth
                }
            })
        }
    }
})

export const authReducer = slice.reducer
export const authActions = slice.actions

