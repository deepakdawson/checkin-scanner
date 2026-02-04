import AppMessages from "../config/AppMessages";
import { ServerCommonResponse } from "../models/response/ServerResponse";
import type { VisitorProfileUpdateRequest, VisitorProfileResponse } from "../models/visitor/visitorProfile";
import { getServerSession } from "next-auth";
import authOptions from "../app/api/auth/[...nextauth]/options";
import httpClient from "../config/http/httpClient";
import decodeToken from "../config/helpers/jwtHelper";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

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
}
