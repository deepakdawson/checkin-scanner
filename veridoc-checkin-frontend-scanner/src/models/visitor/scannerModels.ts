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

type ScannerHistoryResponse ={
    visitorId: string,
    visitorName: string,
    checkInDate: string,
    checkOutDate: string,
    ip: string,
    scanLocation: string,
    organizationName: string
}

type PaginatorResponse = {
    pageNumber: number,
    pageSize: number,
    pageCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
    items: ScannerHistoryResponse[]
}

type ContactUsRequest = {
    firstName: string,
    lastName?: string,
    email: string,
    message: string
    userId: string
}

export type {
    ScannedQrCodeDetailsResponse,
    QrCodeDetailsConfirmRequest,
    PaginatorResponse,
    ContactUsRequest,
    ScannerHistoryResponse
}