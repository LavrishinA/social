import {instance} from "shared/lib/instance.ts";
import {AxiosResponse} from "axios";

export class AuthApi {
    static isAuth() {
        return instance.get<AuthResponse, AxiosResponse<AuthResponse>>(`/auth/me`)
    }
}
type AuthResponse = {
    data: AuthData
    resultCode: number
    messages: string[]
}

export type AuthData = {
    id: number
    email: string
    login: string
}