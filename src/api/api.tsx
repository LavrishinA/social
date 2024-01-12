import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        'API-KEY': '901196af-03b1-43ed-ba81-7c0d3e'
    }
})


export class Class {
    static getUsers() {
        return instance.get<UsersResponseType, AxiosResponse<UsersResponseType>>('/users')
    }
}


export type User = {
    name: string
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

export type UsersResponseType = {
    item: User[]
    totalCount: string
    error: string
}