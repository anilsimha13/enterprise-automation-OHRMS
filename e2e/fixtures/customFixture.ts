import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { HomePage } from "@pages/homePage";
import { AddEmployeePage } from "@pages/addEmployeePage";

type pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  addEmployeePage: AddEmployeePage;
};

export const it = base.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  addEmployeePage: async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },
});
