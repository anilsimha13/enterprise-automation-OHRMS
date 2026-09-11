import fs from "fs";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = "App@2026";

export function generateUserRegistrationPayload() {
  const userRegistrationPayload = JSON.parse(
    fs.readFileSync("./request-objects/POST-registration.json", "utf-8"),
  );
  const userRegistrationBody = structuredClone(userRegistrationPayload);
  userRegistrationBody.email = email;
  userRegistrationBody.password = password;
  return userRegistrationBody;
}

export function generateUserLoginPayload() {
  const userLoginPayload = JSON.parse(
    fs.readFileSync("./request-objects/POST-login.json", "utf-8"),
  );
  const userLoginBody = structuredClone(userLoginPayload);
  userLoginBody.email = email;
  userLoginBody.password = password;
  return userLoginBody;
}

export function generateAddToCartPayload(productId?: string, quantity?: number) {
  const addToCartPayload = JSON.parse(
    fs.readFileSync("./request-objects/POST-addToCart.json", "utf-8"),
  );
  const addToCartBody = structuredClone(addToCartPayload);
  if (productId !== undefined) addToCartBody.product_id = productId;
  if (quantity !== undefined) addToCartBody.quantity = quantity;
  return addToCartBody;
}
