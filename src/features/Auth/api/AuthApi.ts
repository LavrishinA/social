import {CommonResponse, instance} from "shared/lib/instance.ts";
import {AxiosResponse} from "axios";
import {FieldType} from "features/Auth/ui/Login.tsx";

export class AuthApi {
    static isAuth() {
        return instance.get<AuthResponse, AxiosResponse<AuthResponse>>(`/auth/me`)
    }
    static login(arg: FieldType) {
        return instance.post<CommonResponse<{ userId: number }>, AxiosResponse<CommonResponse<{
            userId: number
        }>>, FieldType>('/auth/login', arg)
    }
    static logout() {
        return instance.delete<CommonResponse, AxiosResponse<CommonResponse>>('/auth/login')
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