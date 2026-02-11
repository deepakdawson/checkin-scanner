import AppMessages from "../config/AppMessages";
import { ServerCommonResponse } from "../models/response/ServerResponse";
import type { VisitorProfileUpdateRequest, VisitorProfileResponse } from "../models/visitor/visitorProfile";
import { getServerSession } from "next-auth";
import authOptions from "../app/api/auth/[...nextauth]/options";
import httpClient from "../config/http/httpClient";
import { decodeToken } from "../config/helpers/jwtHelper";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import type { ScannedQrCodeDetailsResponse, QrCodeDetailsConfirmRequest, PaginatorResponse, ContactUsRequest } from "../models/visitor/scannerModels";

export default class VisitorService {
    async getUserProfile(): Promise<VisitorProfileResponse> {

        const session = await getServerSession(authOptions);
        const serverResponse: ServerCommonResponse = {
            code: 200,
            message: '',
            data: undefined
        }

        if (session) {
            const payload = decodeToken(session.user.accessToken);
            try {
                const res = await httpClient.get('/visitor/profile?userId=' + payload?.nameid, session.user.accessToken);
                return res.data as VisitorProfileResponse;
            }
            catch (error) {
                const err = error as AxiosError;
                if (err.response?.status == 401) {
                    redirect('/');
                }
                serverResponse.code = err.response?.status ?? 400;
                serverResponse.message = err.response?.statusText;
                return Promise.reject(serverResponse);
            }
        } else {
            serverResponse.code = 401;
            serverResponse.message = AppMessages.Error.unauthorized;
            return Promise.reject(serverResponse);
        }
    }

    async updateUserProfile(data: VisitorProfileUpdateRequest): Promise<ServerCommonResponse> {
        const response = await fetch('/api/setting/profile', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        if ('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }

    async getScannedQrDetails(token: string): Promise<ScannedQrCodeDetailsResponse> {
        const session = await getServerSession(authOptions);
        const serverResponse: ServerCommonResponse = {
            code: 200,
            message: '',
            data: undefined
        }
        if (session) {
            const payload = decodeToken(session.user.accessToken);
            try {
                const res = await httpClient.get(`/visitor/scan-details?userId=${payload?.nameid}&token=${token}`, session.user.accessToken);
                return res.data as ScannedQrCodeDetailsResponse;
            }
            catch (error) {

                console.log('eafasfasdf', error);
                const err = error as AxiosError;
                if (err.response?.status == 401) {
                    redirect('/');
                }
                serverResponse.code = err.response?.status ?? 400;
                serverResponse.message = err.response?.statusText;
                return Promise.reject(serverResponse);
            }
        } else {
            serverResponse.code = 401;
            serverResponse.message = AppMessages.Error.unauthorized;
            return Promise.reject(serverResponse);
        }
    }

    async confirmQrCodeDetails(data: QrCodeDetailsConfirmRequest): Promise<ServerCommonResponse> {
        const response = await fetch('/api/scanner', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        if ('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }

    async getScanHistory(page?:string): Promise<PaginatorResponse> {

        const session = await getServerSession(authOptions);
        const serverResponse: ServerCommonResponse = {
            code: 200,
            message: '',
            data: undefined
        }

        if (session) {
            const payload = decodeToken(session.user.accessToken);
            try {
                const res = await httpClient.get('/visitor/scan-history?userId=' + payload?.nameid + '&page=' + (page || 0), session.user.accessToken);
                return res.data as PaginatorResponse;
            }
            catch (error) {
                const err = error as AxiosError;
                if (err.response?.status == 401) {
                    redirect('/');
                }
                serverResponse.code = err.response?.status ?? 400;
                serverResponse.message = err.response?.statusText;
                return Promise.reject(serverResponse);
            }
        } else {
            serverResponse.code = 401;
            serverResponse.message = AppMessages.Error.unauthorized;
            return Promise.reject(serverResponse);
        }
    }

    async exportCsvFile(url: string, token: string, userId?: string): Promise<any> {
        try {
            const res = await httpClient.get(url + '/visitor/scan-history/export?userId=' + userId, token);
            return res.data;
        }
        catch (error) {
            const e = error as AxiosError;
            return Promise.reject(e.response?.data);
        }
    }

    async sendContactUsRequest(data: ContactUsRequest): Promise<ServerCommonResponse> {
        const response = await fetch('/api/contact-us', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        if ('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }
}
