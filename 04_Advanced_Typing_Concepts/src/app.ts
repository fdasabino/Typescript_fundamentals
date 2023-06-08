// * Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Frank",
  privileges: ["mediator", "read", "write"],
  startDate: new Date(),
};
console.log(e1);

// * Type Guards
type Combinable = string | number;
type Numeric = number | boolean;

function add(a: Combinable, b: Combinable) {
  // Type Guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add("Frank", "Smith"));
console.log(add(1, 2));

type UnknownEmployee = Employee | Admin;

// Type Guard with functions
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  // Type Guard with in
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  // Type Guard with in
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}
printEmployeeInformation(e1);

// Type Guards with Classes
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // Type Guard with instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// * Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

// Union type
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // Type Guard with switch
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`${animal.type} is moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// * Type Casting
// * Function Overloads
