import { test, expect } from "@playwright/test";
import { RequestHandler } from "../../utils/request-handler";
import { validateSchema } from "../../utils/schema-validator";

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
  await validateSchema(jsonRes);
  //console.log(JSON.stringify(jsonRes));
  //console.log(jsonRes.data[0]);
  expect(jsonRes.data[0].id).toEqual("01M1YY5XVYYCJ9JH2PDE8HPF54");
  expect(jsonRes.data[0].price).toEqual(48.41);
});
