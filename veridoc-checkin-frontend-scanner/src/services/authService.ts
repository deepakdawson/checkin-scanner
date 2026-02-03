import type { GuestAccountCreateResponse } from "@/src/models/response/AuthServerResponses";
import AppMessages from "../config/AppMessages";
import type { userCreateModel, OtpResendRequestModel, OtpVerifyRequestModel } from "../models/auth/userAuthModels";
import { ServerCommonResponse } from "../models/response/ServerResponse";

export default class AuthService {
    async createUserAccount(data: userCreateModel): Promise<GuestAccountCreateResponse> {
        const response = await fetch('/api/guest/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        if('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }

    async resendOtpForUserAccount(data: OtpResendRequestModel): Promise<ServerCommonResponse> {
        const response = await fetch('/api/guest/resent-otp', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        if('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }

        console.log(errorResponse);
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }


    async verifyOtpForUserAccount(data: OtpVerifyRequestModel): Promise<ServerCommonResponse> {
        const response = await fetch('/api/guest/verify', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (response.ok) {
            return await response.json();
        }
        const errorResponse = await response.json();
        const serverResponse = errorResponse as ServerCommonResponse;

        console.log(errorResponse);

        if('code' in serverResponse) {
            return Promise.reject(new Error(serverResponse.message));
        }

        console.log(errorResponse);
        return Promise.reject(new Error(AppMessages.Error.serverError));
    }
}
