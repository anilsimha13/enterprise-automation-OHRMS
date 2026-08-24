import { test, expect, request } from "@playwright/test";

test("GET API Test", async ({ request }) => {
  const res = await request.get("https://api.restful-api.dev/objects");
  expect(res.status()).toBe(200);
  console.log((await res.json())[2].name);
  expect((await res.json())[2].name).toBe("Apple iPhone 12 Pro Max");
});

test("POST API Test", async ({ request }) => {
  const requestBody = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  await request.post("https://api.restful-api.dev/objects", {
    headers: {
      "Content-Type": "application/json",
    },
    data: { requestBody },
  });
});
