
import httpClient from "@/src/config/http/httpClient";
import { OtpResendRequestModel } from "@/src/models/auth/userAuthModels";
import { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import { AxiosError } from "axios";
import type { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const data = (await request.json()) as OtpResendRequestModel;
    
    try {
        const res = await httpClient.post('/auth/guest/reset-otp', data);
        const ok = res.data as ServerCommonResponse;
        return Response.json(ok);
    }
    catch(error){
        const err = error as AxiosError;
        return new Response(JSON.stringify(err.response?.data), {
            statusText: err.response?.statusText,
            status: err.response?.status
        });
    }
}