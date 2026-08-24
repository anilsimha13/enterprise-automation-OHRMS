import { test, expect } from "@playwright/test";

test("Wait for tests", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    { waitUntil: "networkidle" },
  );

  await page.waitForLoadState("domcontentloaded");
  //await page.waitForResponse(/ohrm_logo.png/);
  await page.getByRole("textbox", { name: "username" }).fill("Admin");
  await page.waitForTimeout(1_00);
  await page.getByRole("textbox", { name: "password" }).fill("admin123");
  await page.getByRole("button", { name: /Login/ }).click();
  await page.waitForURL(/dashboard/);
  await page.waitForResponse(/ohrm_logo.png/);
});
