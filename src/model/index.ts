export interface locale {
    id: string;
    value: string;
}

export interface messageTranslation {
    [lang: string]: {
        title: string;
        content: string;
        locale: string;
    }
}

export interface setup {
    id: string;
    logo: string;
    title: string;
    content: string;
    color: string;
    bgColor: string;
    btnBg: string;
    btnColor: string;
    btnHoverBg: string;
    btnHoverColor: string;
    policyUrl: string;
    position: string;
    shop: string;
    enabled: boolean;
    customMessage: boolean;
    translations: messageTranslation
}