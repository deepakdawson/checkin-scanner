import AppMessages from "../config/AppMessages";
import { ServerCommonResponse } from "../models/response/ServerResponse";
import type { VisitorProfileResponse } from "../models/visitor/visitorProfile";

export default class VisitorService {
    async getUserProfile(): Promise<VisitorProfileResponse> {
        const response = await fetch('/api/setting/profile', {
            method: 'GET',
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
}
