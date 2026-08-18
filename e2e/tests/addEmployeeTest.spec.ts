import { expect } from "@playwright/test";
import { it } from "@e2e/fixtures/customFixture";
import { generateRandomEmployeeDetails } from "@e2e/testData/randomData";

it("Should able to add employee to the system without any errors", async ({
  page,
  loginPage,
  homePage,
  addEmployeePage,
}) => {
  await loginPage.goto();
  await loginPage.fillUsername();
  await loginPage.fillPassword();
  await loginPage.clickLogin();
  await homePage.getLeftMenuComponent.leftPanelClick("PIM");
  await homePage.getTopMenuComponent.topPanelClick("Add Employee");
  const employeeDetails = generateRandomEmployeeDetails();
  await addEmployeePage.fillEmployeeDetails(employeeDetails);
  await expect(addEmployeePage.successMessage).toBeVisible();
});
