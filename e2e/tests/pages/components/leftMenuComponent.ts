import { Page } from "@playwright/test";

export class LeftMenuComponent {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async leftPanelClick(leftPanelName: string) {
    await this.page.getByRole("link", { name: leftPanelName }).click();
  }
}
