type userCreateModel = {
    firstName: string,
    lastName?: string,
    email: string,
    phoneCodeISO: string,
    phoneNumber: string,
    address?: string
}

type OtpVerifyModel = {
    userId: string,
    otp: string
}

export type {
    userCreateModel,
    OtpVerifyModel
}