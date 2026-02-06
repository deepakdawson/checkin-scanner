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
    scanLocation: string
}

type PaginatorResponse = {
    pageNumber: number,
    pageSize: number,
    pageCount: string,
    hasPreviousPage: string,
    hasNextPage: string,
    items: ScannerHistoryResponse[]
}

export type {
    ScannedQrCodeDetailsResponse,
    QrCodeDetailsConfirmRequest,
    PaginatorResponse
}