import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";
import {ProfileApi, ProfileArgs} from "../api/profileApi.tsx";

const createProfileSlice = buildCreateSlice({
    creators: {asyncThunk: asyncThunkCreator},
})

const initialState: ProfileSliceArgs = {
    profile: {}
}

const slice = createProfileSlice({
    name: "profile",
    initialState,
    reducers: (create) => ({
        fetchProfile: create.asyncThunk(async (id: string) => {
            const res = await ProfileApi.getProfile(id)
            return res.data as ProfileArgs
        }, {
            fulfilled: (state, action) => {
                state.profile = action.payload
            }
        })
    })
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions

type ProfileSliceArgs = {
    profile: ProfileArgs
}