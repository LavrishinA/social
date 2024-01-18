import  {AxiosResponse} from "axios";
import {instance} from "shared/lib/instance.ts";



export class UsersApi {
    static getUsers(page: number, count: number) {
        return instance.get<UsersResponseType, AxiosResponse<UsersResponseType>>(`/users?page=${page}&count=${count}`)
    }
}


export type User = {
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

export type UsersResponseType = {
    items: User[]
    totalCount: string
    error: string
}