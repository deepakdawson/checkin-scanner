type ScannedQrCodeDetailsResponse = {
    visitorEmail: string,
    visitorId: string,
    firstName: string,
    lastName?: string,
    userName: string,
    userOrganization: string,
    qrUniqueId: string,
    scannedAt: string
}

type QrCodeDetailsConfirmRequest = {
    token: string,
    visitorId: string,
    location: string
}

export type {
    ScannedQrCodeDetailsResponse,
    QrCodeDetailsConfirmRequest
}