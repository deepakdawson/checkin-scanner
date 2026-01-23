interface UserModel {
    firstName: string,
    lastName?: string,
    email: string,
    phoneCodeISO?: string,
    PhoneNumber?: string,
    phoneCode?: string
}

interface UserInfo {
    firstName: string,
    lastName?: string,
    email: string,
}

export type {
    UserModel,
    UserInfo
};