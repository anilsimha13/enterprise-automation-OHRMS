import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test.only("Should login user into the system without any errors", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickLogin();
  await expect(loginPage.dashboardLink).toBeVisible();
});
