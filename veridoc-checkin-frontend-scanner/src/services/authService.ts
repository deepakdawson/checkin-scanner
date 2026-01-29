import type { userCreateModel } from "../models/auth/userAuthModels";
import type { GuestAccountCreateResponse } from "@/src/models/response/AuthServerResponses";

export default class AuthService {
    async createUserAccount(data: userCreateModel): Promise<GuestAccountCreateResponse> {
        const response = await fetch('/api/guest/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        return response.json();
    }
}
