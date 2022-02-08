import {store} from '../index'
import {defineStore} from 'pinia'
import {getLocale} from '../../lang'
import {setup} from "../../model";

interface SetupState {
    setup: setup
    pageLoading: boolean
    language: string | null
    clientid: string | null
    shop: string | null
    code: string | null
    token: string | null
}

export const useSetupStore = defineStore({
    id: 'setup',
    state: (): SetupState => {
        return <SetupState>({
            setup: {} as setup,
            pageLoading: false,
            language: getLocale(),
            clientid: localStorage.getItem('clientid'),
            shop: localStorage.getItem('shop'),
            code: localStorage.getItem('code'),
            token: localStorage.getItem('token')
        });
    },
    getters: {
        getSetup(): setup {
            return this.setup;
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
        setSetup(app: setup): void {
            this.setup = app;
        }
    }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
    return useSetupStore(store)
}