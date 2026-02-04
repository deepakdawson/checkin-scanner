import { ServerCommonResponse } from "@/src/models/response/ServerResponse";
import axios, { AxiosError, AxiosInstance } from "axios";
import https from 'https';

class HttpClient {

    client: AxiosInstance
    constructor() {
        this.client = axios.create({
            baseURL: process.env.API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        });
        // this.client.interceptors.response.use(response => response, (error: AxiosError<ServerCommonResponse>) => {
        //     return Promise.reject(error);
        // });
    }

    get(url: string, token?: string) {
        this.client.interceptors.request.use(function (config) {
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        },
            { synchronous: true, runWhen: () => true }
        );
        return this.client.get(url)
    }

    post(url: string, data?: any, token?: string) {
        this.client.interceptors.request.use(function (config) {
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        },
            { synchronous: true, runWhen: () => true }
        );
        return this.client.post(url, data);
    }

    put(url: string, data?: any, token?: string) {
        this.client.interceptors.request.use(function (config) {
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        },
            { synchronous: true, runWhen: () => true }
        );
        return this.client.put(url, data);
    }

    delete(url: string, token?: string) {
        this.client.interceptors.request.use(function (config) {
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        },
            { synchronous: true, runWhen: () => true }
        );
        return this.client.delete(url);
    }

    patch(url: string, data?: any, token?: string) {
        this.client.interceptors.request.use(function (config) {
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        },
            { synchronous: true, runWhen: () => true }
        );
        return this.client.patch(url, data);
    }
}

export default new HttpClient();