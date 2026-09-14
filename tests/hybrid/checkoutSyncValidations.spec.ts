import { expect, test } from "@playwright/test";
import { RequestHandler } from "../../utils/request-handler";
import {
  generateUserRegistrationPayload,
  generateUserLoginPayload,
  generateAddToCartPayload,
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
  const config = JSON.parse(
    fs.readFileSync("./creds/auth-token.json", "utf-8"),
  );
  const access_token = config["auth-token"];
  const bearerToken = `Bearer ${access_token}`;

  const cartIdResponse = await req
    .path("/carts")
    .headers({ Authorization: bearerToken })
    .postRequest();

  const cartIdJsonResponse = await cartIdResponse.json();

  // Fetch a real product to get a valid product_id
  const productsResponse = await req
    .path("/products")
    .headers({ Authorization: bearerToken })
    .getRequest();
  const productsJson = await productsResponse.json();
  const validProduct = productsJson.data.find(
    (p: any) =>
      p.in_stock === true &&
      p.is_rental === false &&
      p.is_location_offer === false,
  );
  const productId = validProduct.id;

  const cartPath = `/carts/${cartIdJsonResponse.id}`;

  // Add product to cart
  const addToCartResponse = await req
    .path(cartPath)
    .headers({
      Authorization: bearerToken,
      "Content-Type": "application/json",
    })
    .body(generateAddToCartPayload(productId))
    .postRequest();
  const addToCartJsonResponse = await addToCartResponse.json();

  await page.goto("https://practicesoftwaretesting.com/checkout");

  await page.evaluate(
    ([myToken, myCardId]) => {
      window.localStorage.setItem("auth-token", myToken);
      window.sessionStorage.setItem("cart_id", myCardId);
      window.sessionStorage.setItem("cart_quantity", "1");
    },
    [bearerToken, cartIdJsonResponse.id],
  );

  await page.reload();
  const itemName = await page
    .locator("//span[@data-test='product-title']")
    .textContent();
  const itemQuantity = await page
    .locator('//input[@data-test="product-quantity"]')
    .inputValue();
  const cartQuantity = await page
    .locator('//span[@data-test="cart-quantity"]')
    .textContent();
});
