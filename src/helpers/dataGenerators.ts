import { ICheckout } from '../interfaces/checkout';
import { faker } from '@faker-js/faker';
export function generateCheckoutInfo(): ICheckout {
  return {
    emailAddress: faker.internet.email().toLocaleLowerCase(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    streetAddress: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    country: 'United States',
    state: faker.location.state(),
  };
}
