import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("Should login user into the system without any errors", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername("Admin");
  await loginPage.fillPassword("admin123");
  await loginPage.clickLogin();
  await expect(loginPage.dashboardLink).toBeVisible();
});
