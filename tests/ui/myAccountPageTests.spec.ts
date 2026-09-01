import { test, expect } from "@playwright/test";
import fs from "fs";

test("test", async ({ page }) => {
  const config = JSON.parse(
    fs.readFileSync("./creds/auth-token.json", "utf-8"),
  );
  const access_token = config["auth-token"];
  console.log(access_token);
  await page.goto("https://practicesoftwaretesting.com/");
  await page.evaluate((token) => {
    window.localStorage.setItem("auth-token", token);
  }, access_token);
  await page.goto("https://practicesoftwaretesting.com/account");
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account",
  );
});
