export interface language {
    id: string;
    value: string;
}

export interface messageTranslation {
    id: string;
    message: string;
    createdAt: string;
}

export interface setup {
    id: string;
    color: string;
    bgColor:string;
    btnBg:string;
    btnColor:string;
    btnHoverBg:string;
    policyUrl:string;
    position:string;
    shop:string;
    enabled: boolean;
    messages: messageTranslation[]
}