import { Page } from "@playwright/test";
import { EmployeeDetails } from "../../testData/dataInterface";

export class AddEmployeePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillEmployeeDetails(employeeDetails: EmployeeDetails) {
    await this.page
      .getByRole("textbox", { name: "First Name" })
      .fill(employeeDetails.firstName);
    await this.page
      .getByRole("textbox", { name: "Middle Name" })
      .fill(employeeDetails.middleName);
    await this.page
      .getByRole("textbox", { name: "Last Name" })
      .fill(employeeDetails.lastName);
    await this.page.getByRole("button", { name: "Save" }).click();
  }

  get successMessage() {
    return this.page.getByText("SuccessSuccessfully Saved");
  }
}
