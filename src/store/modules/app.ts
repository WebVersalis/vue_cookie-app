import {store} from '@/store'
import {defineStore} from 'pinia'
import {getLocale} from '@/lang'
import {app} from "../../model";

interface AppState {
    app: app
    pageLoading: boolean
    language: string | null
    clientid: string | null
    shop: string | null
    code: string | null
    token: string | null
}

export const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => ({
        pageLoading: false,
        language: getLocale(),
        clientid: localStorage.getItem('clientid'),
        shop: localStorage.getItem('shop'),
        code: localStorage.getItem('code'),
        token: localStorage.getItem('token')
    }),
    getters: {
        getAppg(): app {
            return this.app;
        },
        getPageLoading(): boolean {
            return this.pageLoading
        },
        getLanguage(): string | null {
            return this.language
        },
        getClientId(): string | null {
            return this.clientid
        },
        getShop(): string | null {
            return this.shop
        },
        getCode(): string | null {
            return this.code
        },
        getToken(): string | null {
            return this.token
        }
    },
    actions: {
        setPageLoading(loading: boolean): void {
            this.pageLoading = loading
        },
        setLanguage(language: string): void {
            this.language = language
            localStorage.setItem('language', language)
        },
        setClientId(id: string): void {
            this.clientid = id;
            localStorage.setItem('clientid', id)
        },
        setShop(url: any): void {
            this.shop = url;
            localStorage.setItem('shop', url)
        },
        setCode(code: any): void {
            this.code = code;
            localStorage.setItem('code', code)
        },
        setToken(token: any): void {
            this.token = token;
            localStorage.setItem('token', token)
        },
        setApp(app: app): void {
            this.app = app;
        }
    }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
    return useAppStore(store)
}