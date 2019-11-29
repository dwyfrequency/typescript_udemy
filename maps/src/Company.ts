import faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: { lat: number; lon: number };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lon: Number(faker.address.longitude()),
    };
  }
}
