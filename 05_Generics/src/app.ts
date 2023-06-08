// * Generics
// Generics in TypeScript allow us to create reusable components that can work on a variety of types rather than a single one. In other words, generics allow us to write a function or a class that can work with any data type.

const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

// * Generic Functions
// Generic functions are functions that allow us to specify a type as a parameter, so that we can use that type inside the function. We can use generic types in both the parameter list and the return type.

/*
Here, we're using the spread operator (...) to create a new object that combines the properties of objA and objB. We're also specifying that the returned type is the intersection of T and U, so that the caller knows exactly what they're getting back.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Frank", hobbies: ["sports"], job: "Developer" },
  { age: 33, birthYear: 1990 }
);
console.log(mergedObj);

// * Generic Constraints
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there my name is Frank!"));

// * keyof Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Frank" }, "name"));
console.log(extractAndConvert({ age: 33 }, "age"));

// * Generic Classes
// Generic classes are classes that allow us to specify a type as a parameter, so that we can use that type inside the class. We can use generic types in both the properties and the methods of the class.

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
    console.log("Added =>", this.data);
  }

  removeItem(item: T) {
    if (this.data.includes(item)) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Frank");
textStorage.addItem("Anna");
textStorage.removeItem("Frank");

console.log(textStorage);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);

console.log(numberStorage);
