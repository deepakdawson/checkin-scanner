interface ServerCommonResponse {
    message?: string;
    code: number;
    data?: object
}

interface ServerErrorResponse {
    title?: string,
    status: number,
    traceId?: string,
    type?: string
}


export type {
    ServerCommonResponse,
    ServerErrorResponse
}