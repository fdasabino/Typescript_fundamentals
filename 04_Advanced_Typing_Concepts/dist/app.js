"use strict";
const e1 = {
    name: "Frank",
    privileges: ["mediator", "read", "write"],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("Frank", "Bouchard"));
console.log(add(1, 2));
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
    console.log("Button clicked!");
    userInputElement.value = "Clicked!";
    paragraph.innerText = "Clicked!";
});
const paragraph = document.querySelector("p");
paragraph.innerText = "Hi there!";
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
const errorBag = {
    name: "Must start with a capital character!",
    email: "Not a valid email!",
    password: "Must be at least 6 characters long!",
    repeatPassword: "Passwords must match!",
};
