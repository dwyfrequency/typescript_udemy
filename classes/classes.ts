// public, anyone can access
// protected, class methods and child-class methods can access
// private, class methods can access
class Vehicle {
  constructor(public color: string = "black") {}

  public honk(): void {
    console.log("beep");
  }

  protected getThisMoney() {
    console.log("young moolah baby");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    //   we do not use pub/priv/prot as we're using the value in the parent class
    // hence, we have to use super
    super(color);
  }
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

const car = new Car(4, "purple");

car.startDrivingProcess();
car.honk();
car.aquireCurrency();
console.log(car.color);
