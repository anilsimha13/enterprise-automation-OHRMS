import fs from "fs";
import { Faker } from "@faker-js/faker";

export function generateUserRegistrationPayload() {
  const userRegistrationPayload = JSON.parse(
    fs.readFileSync("./request-objects/POST-registration.json", "utf-8"),
  );

  const userRegistrationBody = structuredClone(userRegistrationPayload);

  console.log(userRegistrationBody);
}
