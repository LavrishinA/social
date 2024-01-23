import {CommonResponse, instance} from "shared/lib/instance.ts";
import {AxiosResponse} from "axios";


export class ProfileApi {
    static getProfile(userId: number) {
        return instance.get<ProfileArgs, AxiosResponse<ProfileArgs>>(`/profile/${userId}`)
    }
    static getStatus(userId: number) {
        return instance.get<StatusArg, AxiosResponse<StatusArg>>(`/profile/status/${userId}`)
    }
    static updateStatus(status: string) {
        return instance.put<CommonResponse, AxiosResponse<CommonResponse>, {status: string}>('/profile/status', {status})
    }

}


export type ProfileArgs = {
    aboutMe: string | null
    contacts: ProfileContacts | null
    lookingForAJob: boolean | null
    lookingForAJobDescription?: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }

}

type ProfileContacts = {
    facebook: string | null
    website: any | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: any | null
    github: string | null
    mainLink: any | null
}

export type StatusArg = string | null