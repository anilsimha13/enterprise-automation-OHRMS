import { Page } from "@playwright/test";
import { Env } from "./frameworkConfig/env";
export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(Env.BASE_URL);
  }

  async fillUsername() {
    await this.page
      .getByRole("textbox", { name: "Username" })
      .fill(Env.ACCOUNT_USERNAME);
  }

  async fillPassword() {
    await this.page
      .getByRole("textbox", { name: "Password" })
      .fill(Env.ACCOUNT_PASSWORD);
  }

  async clickLogin() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  get dashboardLink() {
    return this.page.getByRole("link", { name: "Dashboard" });
  }
}
