type userCreateModel = {
    firstName: string,
    lastName?: string,
    email: string,
    phoneCodeISO: string,
    phoneNumber: string,
    address?: string,
    token: string
}

type OtpVerifyRequestModel = {
    userId: string,
    otp: string
}

type OtpModalInputProps = {
    visitorId: string,
    phoneNumber: string,
    phoneIsoCode: string,
    phoneCode: string,
    email?: string,
    isEmailLogin?: boolean,
}

type OtpResendRequestModel = {
    userId: string
}

type UserLoginResponse = {
    accessToken: string,
    refreshToken: string
}

type OtpGenerateRequestModel = {
    email: string,
    phoneCodeISO: string,
    phoneNumber: string,
    isEmailLogin: boolean
}

export type {
    userCreateModel,
    OtpVerifyRequestModel,
    OtpModalInputProps,
    OtpResendRequestModel,
    UserLoginResponse,
    OtpGenerateRequestModel
}