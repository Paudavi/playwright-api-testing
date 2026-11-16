import { z } from 'zod';

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const bookingSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    totalprice: z.number(),
    depositpaid: z.boolean(),
    bookingdates: z.object({ checkin: isoDate, checkout: isoDate }),
    additionalneeds: z.string().optional(),
});

export const createBookingResponseSchema = z.object({
    bookingid: z.number(),
    booking: bookingSchema,
});