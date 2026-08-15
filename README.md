# Enterprise Automation - Orange HRMS

## Table of Content

- [Playwright(Core Library) vs Playwright Test Runner](#playwrightcore-library-vs-playwright-test-runner)
- [Installation and Setup guide](#installation-and-setup-guide)
- [Playwright Configuration (playwright.config.ts)](#playwright-configuration-playwrightconfigts)

### Playwright(Core Library) vs Playwright Test Runner

| Feature                            | Playwright Core Library                                                 | Playwright Test Runner                                            |
| ---------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Package**                        | `playwright`                                                            | `@playwright/test`                                                |
| **Purpose**                        | Low-level browser automation API                                        | Full end-to-end testing framework                                 |
| **Test Structure**                 | No built-in test structure — use any test framework (Jest, Mocha, etc.) | Built-in `test()` and `expect()` with fixtures                    |
| **Assertions**                     | No built-in assertions                                                  | Rich web-first assertions (`expect(locator).toBeVisible()`, etc.) |
| **Fixtures**                       | Not included                                                            | Built-in fixtures: `page`, `browser`, `context`, `request`        |
| **Parallelism**                    | Manual setup required                                                   | Built-in parallel test execution                                  |
| **Retries**                        | Not built-in                                                            | Configurable auto-retry on failure                                |
| **Reporting**                      | Not included                                                            | Built-in HTML, JSON, JUnit reporters                              |
| **Tracing / Screenshots / Videos** | Manual setup required                                                   | Built-in via `playwright.config.ts`                               |
| **Configuration file**             | Not applicable                                                          | `playwright.config.ts`                                            |
| **CLI**                            | No test CLI                                                             | `npx playwright test`                                             |
| **Use case**                       | Web scraping, automation scripts, custom tooling                        | End-to-end / integration test suites                              |

### Installation and Setup guide

- `npm init playwright@latest` to create a new Playwright project.
- `npx playwright test` to run the tests.
- `npx playwright test --headed` to run the tests in headed mode.
- `npx playwright show-report` to view the test report.
- `npx playwright codegen <url>` to generate code for a specific URL.
- `npx playwright test --headed --trace on` to run the tests in headed mode with tracing enabled.

### Playwright Configuration (playwright.config.ts)

- `use` - This section is used to configure the browser and device settings for the tests. It allows you to specify the browser type, viewport size, and other options.
- `navigationTimeout` - This option sets the maximum time (in milliseconds) that Playwright will wait for a page navigation to complete. If the navigation takes longer than this time, the test will fail.
- `actionTimeout` - This option sets the maximum time (in milliseconds) that Playwright will wait for an action (like clicking a button or filling a form) to complete. If the action takes longer than this time, the test will fail.

```js
export default defineConfig({
  use: {
    trace: "on-first-retry",
    navigationTimeout: 30000,
    actionTimeout: 30000,
  },
});
```

```js
export default defineConfig({
  expect: {
    timeout: 30000,
  },
});
```

<!--
#### Sequence of Videos to be followed for the complete Automation Framework

- 1. playwright installation and 1st test execution.mp4
- 2. Playwright test setup.mp4
- 8. playwright core library vs playwright test runner.mp4
- 3. Convert loginTest To Page Object Model.mp4
- 5. New Test AddEmployeeTest.mp4
-->
