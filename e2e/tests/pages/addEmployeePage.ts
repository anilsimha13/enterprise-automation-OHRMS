import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class AddEmployeePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillEmployeeDetails() {
    await this.page
      .getByRole("textbox", { name: "First Name" })
      .fill(faker.person.firstName());
    await this.page
      .getByRole("textbox", { name: "Middle Name" })
      .fill(faker.person.middleName());
    await this.page
      .getByRole("textbox", { name: "Last Name" })
      .fill(faker.person.lastName());
    await this.page.getByRole("button", { name: "Save" }).click();
  }

  get successMessage() {
    return this.page.getByText("SuccessSuccessfully Saved");
  }
}
