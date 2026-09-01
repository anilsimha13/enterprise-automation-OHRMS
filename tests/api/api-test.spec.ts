import { test, request } from "@playwright/test";
import { faker } from "@faker-js/faker";
import fs from "fs";

const email: string = faker.internet.email();
const password: string = "App@2026";

test("Should able to register the user", async ({ request }) => {
  const first_name = faker.person.firstName();
  const last_name = faker.person.lastName();
  const res = await request.post(
    "https://api.practicesoftwaretesting.com/users/register",
    {
      data: {
        first_name,
        last_name,
        dob: "1992-07-31",
        phone: "9999999999",
        email: email,
        password: password,
        address: {
          street: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          country: faker.location.country(),
          postal_code: faker.location.zipCode,
        },
      },
    },
  );
  console.log(await res.json());
});

test("Should able to login user", async ({ request }) => {
  const res1 = await request.post(
    "https://api.practicesoftwaretesting.com/users/login",
    { data: { email: email, password: password } },
  );
  console.log(await res1.json());

  const jsonResponse = await res1.json();
  const token = jsonResponse.access_token;
  const tokenValue = { "auth-token": `${token}` };
  fs.writeFileSync(
    "./creds/auth-token.json",
    JSON.stringify(tokenValue, null, 4),
  );
  console.log(tokenValue);
});
