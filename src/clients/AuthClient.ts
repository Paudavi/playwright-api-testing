import { APIRequestContext, expect } from "@playwright/test";
import { env } from '../config/env';

export class AuthClient {
    constructor(private readonly request: APIRequestContext) { }
    createToken(username: string, password: string) {
        return this.request.post('/auth', { data: { username, password } });
    }
    async getToken(): Promise<string> {
        const res = await this.createToken(env.user, env.password);
        expect(res.ok(), 'POST /auth should succeed').toBeTruthy();
        const body = await res.json();
        expect(body.token, 'POST /auth should return a token').toBeTruthy();
        return body.token;
    }
}