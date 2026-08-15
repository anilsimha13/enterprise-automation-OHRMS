import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test.only("Should able to add employee to the system without any errors", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillUsername("Admin");
  await loginPage.fillPassword("admin123");
  await loginPage.clickLogin();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill("firstName");
  await page.getByRole("textbox", { name: "Middle Name" }).fill("middleName");
  await page.getByRole("textbox", { name: "Last Name" }).fill("lastName");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("SuccessSuccessfully Saved")).toBeVisible();
  await expect(page.locator("#app")).toContainText("firstName lastName");
});
