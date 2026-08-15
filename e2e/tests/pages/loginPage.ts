import { Page } from "@playwright/test";
export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  async fillUsername(username: string) {
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }

  async clickLogin() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  get dashboardLink() {
    return this.page.getByRole("link", { name: "Dashboard" });
  }
}
