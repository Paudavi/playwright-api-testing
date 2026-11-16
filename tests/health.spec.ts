import {test, expect} from '@playwright/test';

test('API test set up', async ({request}) => {
    const res = await request.get('/ping');
    // expect(res.status()).toBe(201);
    expect(res.ok()).toBeTruthy();
});