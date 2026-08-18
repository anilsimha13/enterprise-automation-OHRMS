import { expect } from "@playwright/test";
import { it } from "@e2e/fixtures/customFixture";

it("Should login user into the system without any errors", async ({
  page,
  loginPage,
}) => {
  await loginPage.goto();
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickLogin();
  await expect(loginPage.dashboardLink).toBeVisible();
});
