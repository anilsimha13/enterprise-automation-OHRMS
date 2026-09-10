import { expect, test } from "@playwright/test";
import { RequestHandler } from "../../utils/request-handler";
import {
  generateUserRegistrationPayload,
  generateUserLoginPayload,
} from "../../utils/data-generator";
import fs from "fs";

const baseURL = "https://api.practicesoftwaretesting.com";

test("Should validate the Cart-sync", async ({ request, page }) => {
  const req = new RequestHandler(request, baseURL);
  const res = await req
    .path("/users/register")
    .headers({})
    .body(generateUserRegistrationPayload())
    .postRequest();
  const registratJsonResponse = await res.json();
  expect(res.status()).toEqual(201);
  expect(registratJsonResponse.dob).toEqual("1992-07-31");

  //Login Request

  const loginResponse = await req
    .path("/users/login")
    .body(generateUserLoginPayload())
    .postRequest();
  const loginJsonResponse = await loginResponse.json();
  const token = loginJsonResponse.access_token;
  const tokenValue = { "auth-token": `${token}` };
  fs.writeFileSync(
    "./creds/auth-token.json",
    JSON.stringify(tokenValue, null, 4),
  );

  //UI

  await page.goto("https://practicesoftwaretesting.com/checkout");
  const itemNameText = page.locator(
    "//span[@data-test='product-title']",
  ).textContent;
  await page.locator('//input[@data-test="product-quantity"]');
  await page.locator('//span[@data-test="cart-quantity"]');
});
