import type { NextRequest } from "next/server";
import httpClient from "@/src/config/http/httpClient";
import type { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/options";
import { AxiosError } from "axios";
import decodeToken from "@/src/config/helpers/jwtHelper";
import { redirect } from "next/navigation";
import { ContactUsRequest, QrCodeDetailsConfirmRequest } from "@/src/models/visitor/scannerModels";


export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/')
    }
    const payload = decodeToken(session.user.accessToken);
    const data = (await request.json()) as ContactUsRequest;
    data.userId = payload?.nameid ?? '';
    try {
        const res = await httpClient.post('/visitor/contact-us', data, session.user.accessToken);
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