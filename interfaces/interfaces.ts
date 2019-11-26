interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldcivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => console.log(vehicle.summary());

printVehicle(oldcivic);
