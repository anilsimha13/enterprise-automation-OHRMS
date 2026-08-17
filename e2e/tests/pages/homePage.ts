import { Page } from "@playwright/test";
import { TopMenuComponent } from "./components/topMenuComponent";
import { LeftMenuComponent } from "./components/leftMenuComponent";

export class HomePage {
  private page: Page;
  private topMenuComponent: TopMenuComponent;
  private leftMenuComponent: LeftMenuComponent;
  constructor(page: Page) {
    this.page = page;
    this.topMenuComponent = new TopMenuComponent(page);
    this.leftMenuComponent = new LeftMenuComponent(page);
  }

  get getLeftMenuComponent() {
    return this.leftMenuComponent;
  }
  get getTopMenuComponent() {
    return this.topMenuComponent;
  }
}
