import faker from "faker";

export default class User {
  name: string;
  location: { lat: number; lon: number };
  constructor(name: string, lat: number, lon: number) {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude),
      lon: Number(faker.address.longitude),
    };
  }
}
