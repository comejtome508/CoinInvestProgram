export enum Terms {
    ACCOUNT = 'ACCOUNT',
    PRIVACY = 'PRIVACY',
    PRIVACY_PROCESS_CONFIRM = 'PRIVACY_PROCESS_CONFIRM',
    NONE = 'NONE',
}

export interface RegisterFormValues {
    email: string|undefined;
    nickname: string|undefined;
    password: string|undefined;
    ['password-confirm']: string|undefined;
    user: {
        attributes: {
            phoneNumber: string;
            // registerAt: string;
            consent: {
                account: boolean;
                privacy: boolean;
                'privacy-process-confirm': boolean;
                age: boolean;
            };
        };
    };
}