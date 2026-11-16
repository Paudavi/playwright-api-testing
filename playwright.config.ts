import { defineConfig } from '@playwright/test';
import { env } from './src/config/env';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: process.env.CI ? 1 : 0,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: env.baseURL,
        extraHTTPHeaders: { Accept: 'application/json' },
        trace: 'retain-on-failure',
    },
});