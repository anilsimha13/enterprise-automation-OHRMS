# Enterprise Automation - Orange HRMS

## Table of Content

- [Playwright(Core Library) vs Playwright Test Runner](#playwrightcore-library-vs-playwright-test-runner)
- [Installation and Setup guide](#installation-and-setup-guide)
- [Playwright Configuration (playwright.config.ts)](#playwright-configuration-playwrightconfigts)
- [Playwright Locators](#playwright-locators)
- [Playwright Auto Wait](#playwright-auto-wait)
- [Custom Fixtures](#custom-fixtures)

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
- `npx playwright test --ui` to open the Playwright UI for test execution and debugging.

### Playwright Locators

- `getByRole` - This locator is used to find elements based on their ARIA role. It is useful for finding elements that have a specific role, such as buttons, links, or headings.
- `getByLabel` - This locator is used to find elements based on their associated label. It is useful for finding form elements, such as input fields or checkboxes, that have a label associated with them.
- `getByPlaceholder` - This locator is used to find elements based on their placeholder text. It is useful for finding input fields that have a specific placeholder text.
- `getByText` - This locator is used to find elements based on their visible text content. It is useful for finding elements that contain specific text, such as buttons or links.
- `getByAltText` - This locator is used to find elements based on their alternative text. It is useful for finding images or other elements that have an alt attribute.
- `getByTitle` - This locator is used to find elements based on their title attribute. It is useful for finding elements that have a specific title, such as tooltips or icons.
- `getByTestId` - This locator is used to find elements based on their test ID. It is useful for finding elements that have a specific test ID, which can be set using the `data-testid` attribute.
- `Locator chaining` - This feature allows you to chain multiple locators together to find elements that match multiple criteria. For example, you can use `getByRole('button').getByText('Submit')` to find a button element that has the text "Submit".

### Playwright Configuration (playwright.config.ts)

- `use` - This section is used to configure the browser and device settings for the tests. It allows you to specify the browser type, viewport size, and other options.
- `navigationTimeout` - This option sets the maximum time (in milliseconds) that Playwright will wait for a page navigation to complete. If the navigation takes longer than this time, the test will fail.
- `actionTimeout` - This option sets the maximum time (in milliseconds) that Playwright will wait for an action (like clicking a button or filling a form) to complete. If the action takes longer than this time, the test will fail.

### Playwright Auto Wait

- Playwright automatically waits for elements to be ready before performing actions on them. This means that you don't need to add explicit waits or sleep statements in your tests, as Playwright will handle this for you.
- Playwright will wait for elements to be visible, enabled, and stable before interacting with them. This helps to reduce flakiness in tests and makes them more reliable.
- Playwright will also wait for network requests to complete before proceeding with actions that depend on them. This ensures that your tests are synchronized with the state of the application.
- Playwright provides a set of built-in assertions that can be used to verify the state of elements and the application. These assertions automatically wait for the expected conditions to be met before proceeding, making your tests more robust.

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

### Custom Fixtures

- Custom fixtures are user-defined fixtures that can be created to extend the functionality of Playwright's built-in fixtures. They allow you to set up and tear down resources that are needed for your tests, such as database connections, API clients, or any other custom setup.
- Custom fixtures can be defined in a separate file and imported into your test files. They can be used to provide additional context or data to your tests, making them more modular and reusable.
- Custom fixtures can also be used to create reusable test utilities, such as login functions or data generators, that can be shared across multiple test files.

<!--
#### Sequence of Videos to be followed for the complete Automation Framework

- 1. playwright installation and 1st test execution.mp4
- 2. Playwright test setup.mp4
- 8. playwright core library vs playwright test runner.mp4
- 3. Convert loginTest To Page Object Model.mp4
- 5. New Test AddEmployeeTest.mp4
- 4. Env file and class setup.mp4
- 7. Convert addEmployeeTest to Pages and Components.mp4
- 6. Adding assertion for ToastMsg.mp4
- 9. Faker data generation and using in spec file.mp4
- 16. tsConfig file for readable imports.mp4
- 10. custom Fixtures and setup.mp4
- 11. Playwright Locators Part_1.mp4
- 12. Playwright Locators Part-2.mp4
- 13. PlayWright UI Mode and Trace Viewer.mp4
- 14. Playwright Auto Wait VS Selenium WebDriver.mp4
-->
