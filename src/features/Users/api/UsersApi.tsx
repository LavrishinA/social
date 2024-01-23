import {AxiosResponse} from "axios";
import {CommonResponse, instance} from "shared/lib/instance.ts";


export class UsersApi {
    static getUsers(page: number, count: number) {
        return instance.get<UsersListResponse, AxiosResponse<UsersListResponse>>(`/users?page=${page}&count=${count}`)
    }

    static followUser(id: number) {
        return instance.post<CommonResponse, AxiosResponse<CommonResponse>>(`/follow/${id}`)
    }

    static unfollowUser(id: number) {
        return instance.delete<CommonResponse, AxiosResponse<CommonResponse>>(`/follow/${id}`)
    }
}


export type UsersListItemArg = {
    name: string
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}

export type UsersListResponse = {
    items: UsersListItemArg[]
    totalCount: number
    error: string | null
}


