import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { AddEmployeePage } from "./pages/addEmployeePage";
import { HomePage } from "./pages/homePage";

test("Should able to add employee to the system without any errors", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const addEmployeePage = new AddEmployeePage(page);
  await loginPage.goto();
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickLogin();
  await homePage.getLeftMenuComponent.leftPanelClick("PIM");
  await homePage.getTopMenuComponent.topPanelClick("Add Employee");
  await addEmployeePage.fillEmployeeDetails();
  await expect(addEmployeePage.successMessage).toBeVisible();
});
