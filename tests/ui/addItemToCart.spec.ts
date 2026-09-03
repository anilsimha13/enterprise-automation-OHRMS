import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

//Astrid_OKon45@yahoo.com

test("should be able to add item to cart", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill("Ophelia.Nitzsche@gmail.com");
  await page.locator('[data-test="password"]').fill("App@2026");
  await page.locator('[data-test="login-submit"]').click();
  await page.waitForTimeout(3_000);
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
  await page.locator('//a[@data-test="nav-cart"]').click();
  const itemNameInCart = await page
    .locator('//span[@data-test="product-title"]')
    .textContent();
  console.log(itemNameInCart);
  expect(itemNameInCart).toContain("Claw Hammer with Shock Reduction Grip");
  await page.locator('//button[@data-test="proceed-1"]').click();
  expect(
    await page
      .locator("//p [contains(text(),'you are already logged in')]")
      .textContent(),
  ).toContain("you are already");
  await page.locator('//button[@data-test="proceed-2"]').click();
  const zipCode = faker.location.zipCode();
  await page.locator("#country").waitFor({ state: "visible" });
  await page.locator("#country").evaluate((select: HTMLSelectElement) => {
    select.value = "US";
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
  await page.waitForTimeout(3_000);
  await page.locator("#postal_code").fill(zipCode);
  await page.close();
});

test.skip("Should be able to complete the Payment for the items added in cart", async ({
  page,
}) => {
  await page.locator('//a[@data-test="nav-cart"]').click();
  const itemNameInCart = await page
    .locator('//span[@data-test="product-title"]')
    .textContent();
  console.log(itemNameInCart);
  expect(itemNameInCart).toContain("Claw Hammer with Shock Reduction Grip");
  await page.locator('//button[@data-test="proceed-1"]').click();
  expect(
    await page
      .locator("//p [contains(text(),'you are already logged in')]")
      .textContent(),
  ).toContain("you are already");
  await page.locator('//button[@data-test="proceed-2"]').click();
  const zipCode = faker.location.zipCode();
  await page.locator("#country").waitFor({ state: "visible" });
  await page.locator("#country").selectOption({ value: "US" });
  await page.locator("#postal_code").fill(zipCode);
});
