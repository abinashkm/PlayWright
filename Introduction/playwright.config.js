// @ts-check
import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './utils/enviromentUrls.js';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings */
  use: {
    /* Base URL */
    baseURL: process.env.TEST_ENV === 'local'
      ? baseEnvUrl.local.home
      : process.env.TEST_ENV === 'staging'
      ? baseEnvUrl.staging.home
      : process.env.TEST_ENV === 'production'
      ? baseEnvUrl.production.home
      : process.env.CI
      ? baseEnvUrl.ci.prefix +
        process.env.GITHUB_REF_NAME +
        baseEnvUrl.ci.suffix
      : baseEnvUrl.staging.home, // default

    /* Trace */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
      },
    },

    /* You can still add env-specific projects if needed */
    {
      name: 'local',
      use: {
        baseURL: baseEnvUrl.local.home,
      },
    },

    {
      name: 'ci',
      use: {
        baseURL: process.env.CI
          ? baseEnvUrl.ci.prefix +
            process.env.GITHUB_REF_NAME +
            baseEnvUrl.ci.suffix
          : baseEnvUrl.staging.home,
      },
    },

    /* Mobile configs (unchanged) */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Branded browsers (unchanged) */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});