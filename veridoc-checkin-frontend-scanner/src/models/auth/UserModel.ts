interface UserModel {
    firstName: string,
    lastName?: string,
    email: string,
    phoneCodeISO?: string,
    PhoneNumber?: string,
    phoneCode?: string
}

interface UserInfo {
    accessToken: string,
        refreshToken: string
}

export type {
    UserModel,
    UserInfo
};