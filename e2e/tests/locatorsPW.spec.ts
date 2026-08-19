import { it } from "@e2e/fixtures/customFixture";

it("should locate elements using various locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByRole("textbox", { name: "username" }).fill("Admin");
  await page.getByRole("textbox").last().fill("admin123");
  await page.getByRole("button").nth(0).click();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByPlaceholder("First Name").fill("John");
  await page.getByPlaceholder("Last Name").fill("Doe");
  const text = await page.getByText("Employee Id").textContent();
  console.log("Employee Id text content:", text);
  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(5000);
});
