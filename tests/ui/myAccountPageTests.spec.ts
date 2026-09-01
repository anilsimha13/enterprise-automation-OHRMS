import { test, expect } from "@playwright/test";
import fs from "fs";

test("test", async ({ page }) => {
  const config = JSON.parse(
    fs.readFileSync("./creds/auth-token.json", "utf-8"),
  );
  const access_token = config["auth-token"];
  console.log(access_token);
  await page.goto("https://practicesoftwaretesting.com/");
  /*
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill("Lorenz.Spinka4@hotmail.com");
  await page.locator('[data-test="password"]').fill("App@2026");
  await page.locator('[data-test="login-submit"]').click();
  */

  await page.evaluate((token) => {
    window.localStorage.setItem("auth-token", token);
  }, access_token);
  await page.goto("https://practicesoftwaretesting.com/account");
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account",
  );
});
