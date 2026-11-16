import { randomUUID } from "node:crypto";

export type Booking = {
    firstname: string,
    lastname: string,
    totalprice: number;
    depositpaid: boolean;
    bookingdates: { checkin: string; checkout: string };
    additionalneeds?: string;
};

const toDate = (d: Date) => d.toISOString().slice(0, 10);
const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export function buildBooking(overrides: Partial<Booking> = {}): Booking {
    const checkin = new Date();
    checkin.setDate(checkin.getDate() + randomInt(1, 30));
    const checkout = new Date(checkin);
    checkout.setDate(checkout.getDate() + randomInt(1, 7));

    return {
        firstname: `Pau-${randomUUID().slice(0, 8)}`,
        lastname: `Tester`,
        totalprice: randomInt(50, 1000),
        depositpaid: Math.random() > 0.5,
        bookingdates: { checkin: toDate(checkin), checkout: toDate(checkout) },
        additionalneeds: 'Breakfast and soft towels',
        ...overrides,
    };
}