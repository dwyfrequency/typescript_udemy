interface Vehicle extends Reportable {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
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

const printVehicle = (reportableObj: Reportable): void =>
  console.log(reportableObj.summary());

printVehicle(oldcivic);
