type VisitorProfileResponse = {
    visitorId: string,
    firstName: string,
    lastName?: string,
    email: string,
    phoneISOCode: string,
    phoneNumber: string,
    address?: string
}
type VisitorProfileUpdateRequest = {
    visitorId: string,
    firstName: string,
    lastName?: string,
    address?: string
}



export type {
    VisitorProfileResponse,
    VisitorProfileUpdateRequest
}