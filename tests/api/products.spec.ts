import { test, expect } from "@playwright/test";
import { RequestHandler } from "../../util/request-handler";

const baseUrl = "https://api.practicesoftwaretesting.com/";

test("GET Method", async ({ request }) => {
  const req = new RequestHandler(request, baseUrl);
  const res = await req
    .path("products")
    .params({
      between: "price,34,100",
      is_rental: "false",
      page: "0",
    })
    .getRequest();
  expect(res.ok()).toBeTruthy();
  const jsonRes = await res.json();
  console.log(jsonRes.data[0]);
  expect(jsonRes.data[0].id).toEqual("01M1WP2Q459KWPV1N0H93KAKEW");
  expect(jsonRes.data[0].price).toEqual(48.41);
});
