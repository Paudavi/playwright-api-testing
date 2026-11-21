import { test as base, expect } from '@playwright/test';
import { AuthClient } from '../clients/AuthClient';
import { BookingClient } from '../clients/BookingClient';
import { Booking, buildBooking } from '../data/bookingFactory';
import { env } from '../config/env';

type TestFixtures = {
    bookingAPI: BookingClient;
    anonymousBookingApi: BookingClient;
    createdBooking: { id: number; data: Booking };
}

type WorkerFixtures = {
    authToken: string;
};

export const test = base.extend<TestFixtures, WorkerFixtures> ({
    authToken: [
        async ({playwright}, use) => {
            const ctx = await playwright.request.newContext( {baseURL: env.baseURL});
            const token = await new AuthClient(ctx).getToken();
            await ctx.dispose();
            await use(token);
        }, {
            scope: 'worker'
        }
    ]
})