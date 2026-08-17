import { faker } from "@faker-js/faker";
import { EmployeeDetails } from "./dataInterface";

export const generateRandomEmployeeDetails = (): EmployeeDetails => {
  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };
};
