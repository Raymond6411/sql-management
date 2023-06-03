import { defineStore } from "pinia"
import { reactive } from "vue"

export interface key {
    openAiKey: string | undefined
    ttsKey: string | undefined
}

export interface UserLogs {
    ip: string;
    browser: string;
    addr: string;
    username: string;
    time: string;
  }

export interface Account {
    name:string
    password:string
    role:string
    _id:string
    key:key|null
}
export interface User {
    account: string | undefined
    authority: string | undefined
    authorized: string | undefined
}

export const useUserStore = defineStore('user', () => {

    const user = reactive<User>({
        account: undefined,
        authority: undefined,
        authorized: undefined
    })

    function initUser(payload: User): void {
        user.account = payload.account
        user.authority = payload.authority
        user.authorized = payload.authorized
    }

    function logoutUser(): void {
        user.account = undefined
        user.authority = undefined
        user.authorized = undefined
    }

    function isAuth(): boolean {
        return false
    }

    return { user, initUser, logoutUser }
})