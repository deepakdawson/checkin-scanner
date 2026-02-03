import type { NextRequest } from "next/server";
import httpClient from "@/src/config/http/httpClient";
import type { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/options";
import { VisitorProfileResponse } from "@/src/models/visitor/visitorProfile";
import { AxiosError } from "axios";


export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    
    if(!session) {
        return  Response.redirect('/');
    }
    
    try {
        const res = await httpClient.get('/visitor/profile?userId=');
        const ok = res.data as VisitorProfileResponse;
        return Response.json(ok);
    }
    catch (error) {
        const err = error as AxiosError;
        return new Response(JSON.stringify(err.response?.data), {
            statusText: err.response?.statusText,
            status: err.response?.status
        });
    }

}

export async function POST(request: NextRequest) {

}