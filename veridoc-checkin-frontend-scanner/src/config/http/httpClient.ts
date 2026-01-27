import { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import axios, { AxiosError, AxiosInstance } from "axios";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";


class HttpClient {

    client: AxiosInstance
    constructor(token?: string) {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: {
                'Content-Type': 'application/json',
                token
            },
        });
        this.client.interceptors.response.use(response => response, (error: AxiosError<ServerCommonResponse>) => {
            if (error.status === 401) {
                // logout the user and redirect
                signOut();
                redirect('/');
            }
            return Promise.reject(error);
        });
    }

    get(url: string) {
        return this.client.get(url)
    }

    post(url: string, data?: any) {
        return this.client.post(url, data);
    }

    put(url: string, data?: any) {
        return this.client.put(url, data);
    }

    delete(url: string) {
        return this.client.delete(url);
    }

    patch(url: string, data?: any) {
        return this.client.patch(url, data);
    }
}

export default new HttpClient();