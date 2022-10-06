export enum ITerms {
    ACCOUNT = 'ACCOUNT',
    PRIVACY = 'PRIVACY',
    PRIVACY_PROCESS_CONFIRM = 'PRIVACY_PROCESS_CONFIRM',
    NONE = 'NONE',
}

export interface IRegisterFormValues {
    email: string;
    nickname: string;
    password: string;
    ['password-confirm']: string;
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