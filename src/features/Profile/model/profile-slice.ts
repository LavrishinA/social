import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";
import {ProfileApi, ProfileArgs, StatusArg} from "../api/profileApi";


const createProfileSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState = {
    profile: {} as ProfileArgs,
    status: null as StatusArg
}

const slice = createProfileSlice({
    name: "profile",
    initialState,
    reducers: (create) => ({
        fetchProfile: create.asyncThunk(async (id: number) => {
            const res = await ProfileApi.getProfile(id)

            return res.data as ProfileArgs
        }, {
            fulfilled: (state, action) => {
                state.profile = action.payload
            }
        }),
        fetchStatus: create.asyncThunk(async (id: number) => {
            const res = await ProfileApi.getStatus(id)

            return res.data as string
        }, {
            fulfilled: (state, action) => {
                state.status = action.payload
            }
        }),
        updateStatus: create.asyncThunk(async (status: string, {rejectWithValue}) => {
            const res = await ProfileApi.updateStatus(status)

            if (res.data.resultCode === 0) {
                return status as string
            } else {
                return rejectWithValue(res.data.messages[0])
            }

        }, {
            fulfilled: (state, action) => {
                state.status = action.payload
            }
        })
    }),
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions


