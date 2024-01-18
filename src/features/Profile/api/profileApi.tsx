import {instance} from "shared/lib/instance.ts";
import {AxiosResponse} from "axios";


export class ProfileApi {
    static getProfile(userId: string) {
        return instance.get<ProfileArgs, AxiosResponse<ProfileArgs>, {userId: number}>(`/profile/${userId}`)
    }
}


export type ProfileArgs = {
    aboutMe?: string
    contacts?: ProfileContacts
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: {
        small?: string
        large?: string
    }

}

export type ProfileContacts = {
    facebook?: string
    website?: any
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: any
    github?: string
    mainLink?: any
}