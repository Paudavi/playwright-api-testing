import 'dotenv/config';

export const env = {
    baseURL: process.env.BASE_URL ?? 'https://restful-booker.herokuapp.com',
    user: process.env.API_USER ?? 'admin',
    password: process.env.API_PASSWORD ?? 'password123',
};