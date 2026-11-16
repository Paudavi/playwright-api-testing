import { APIRequestContext } from '@playwright/test';
import { Booking } from '../data/bookingFactory';

export class BookingClient {
    constructor(
        private readonly request: APIRequestContext,
        private readonly token?: string,
    ) { }

    private authHeaders(): Record<string, string> {
        return this.token ? { Cookie: `token=${this.token}` } : {};
    }

    getIds(params?: Record<string, string>) {
        return this.request.get('/booking', { params });
    }

    get(id: number) {
        return this.request.get(`/booking/${id}`);
    }

    create(booking: Booking) {
        return this.request.post('/booking', { data: booking });
    }

    update(id: number, booking: Booking) {
        return this.request.put(`booking/${id}`,
            { data: booking, headers: this.authHeaders() });
    }

    partialUpdate(id: number, changes: Partial<Booking>) {
        return this.request.patch(`/booking/${id}`,
            { data: changes, headers: this.authHeaders() });
    }

    delete(id: number) {
        return this.request.delete(`/booking/${id}`, 
            { headers: this.authHeaders() });
    }
}