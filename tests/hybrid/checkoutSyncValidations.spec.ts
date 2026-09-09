import { test } from "@playwright/test";
import { RequestHandler } from "../../utils/request-handler";
import { generateUserRegistrationPayload } from "../../utils/data-generator";

const baseURL = "https://api.practicesoftwaretesting.com/";

test("Should validate the Cart-sync", async ({ request }) => {
  generateUserRegistrationPayload();
  const req = new RequestHandler(request, baseURL);
  const res = await req
    .path("user/register")
    .headers({})
    .body({})
    .postRequest();
});
