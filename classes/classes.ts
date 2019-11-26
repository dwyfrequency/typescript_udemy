class Vehicle {
  public honk(): void {
    console.log("beep");
  }

  protected getThisMoney() {
    console.log("young moolah baby");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }

  aquireCurrency(): void {
    this.getThisMoney();
  }
}

const car = new Car();

car.startDrivingProcess();
car.honk();
car.aquireCurrency();
