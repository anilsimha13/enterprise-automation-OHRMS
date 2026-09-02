import { test, expect } from "@playwright/test";

test("should be able to add item to cart", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page
    .locator('[data-test="email"]')
    .fill("Lafayette.Hodkiewicz52@yahoo.com");
  await page.locator('[data-test="password"]').fill("App@2026");
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="search-query"]').fill("hammer");
  await page.locator('[data-test="search-submit"]').click();
  await expect(page.locator('[data-test="search-term"]')).toContainText(
    "hammer",
  );
  await page
    .locator("//h5[contains(text(), 'Claw Hammer with Shock Reduction Grip')]")
    .click();
  await expect(page.locator('[data-test="product-name"]')).toContainText(
    "Claw Hammer with Shock Reduction Grip",
  );
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.getByLabel("Product added to shopping")).toContainText(
    "Product added to shopping cart.",
  );
  await page.close();
});
