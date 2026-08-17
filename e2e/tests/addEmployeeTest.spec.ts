import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { AddEmployeePage } from "./pages/addEmployeePage";
import { HomePage } from "./pages/homePage";
import { generateRandomEmployeeDetails } from "../testData/randomData";

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
  const employeeDetails = generateRandomEmployeeDetails();
  await addEmployeePage.fillEmployeeDetails(employeeDetails);
  await page.waitForTimeout(20000); // Wait for 2 seconds to allow the success message to appear
  await expect(addEmployeePage.successMessage).toBeVisible();
});
