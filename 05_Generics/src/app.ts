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

// * Generic Utility Types
// Generic utility types are utility types that either build on top of generic types or that are generic in nature. We've already seen one generic utility type: Partial<T>. Here are some other generic utility types that are available in TypeScript:

// * Partial
// Partial<T> allows us to specify that all properties of the type T are optional. This is useful when we want to create a new object based on an existing object but only change some of the properties.

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  // Partial<T> makes all properties of T optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// * Readonly
// Readonly<T> allows us to specify that all properties of the type T are readonly. This is useful when we want to create an object that should not be changed after it's been created.

const readonlyArray: Readonly<string[]> = ["Frank", "Anna"];
// readonlyArray.push("Manu");
// readonlyArray.pop();

// * Record
// Record<K, T> allows us to specify that the type K is a key of the type T and that the value for each property of K is of type T. This is useful when we want to create an object that has a specific set of properties, where each property has the same type.

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// generic types vs union types
// https://stackoverflow.com/questions/52677572/what-is-the-difference-between-generic-types-and-union-types

/*
Generic types and union types are both powerful features of TypeScript that allow you to write more flexible code. However, they serve different purposes and have different use cases.

- **Generic Types:** Generic types in TypeScript enable you to define a type or function that can work across a range of types rather than a single one. With generics, you can create reusable code components that can work with a variety of data types. For example, a generic `identity` function can take in any type of argument and return the same type as its output.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello World")); // Output: "Hello World"
console.log(identity<number>(123)); // Output: 123
```

- **Union Types:** Union types in TypeScript enable you to define a type that can hold multiple types of values. You can create a union type by using the pipe symbol `|` to separate the different types. For example, a variable that can hold either a string or a number can be defined as a union type.

```typescript
let myVar: string | number;
myVar = "Hello";
myVar = 100;
```

The key difference between these two types is that generic types help create reusable and flexible code, while union types help define variables that can hold multiple possible types of data. 

In general, it's a good practice to use generics when you want to create reusable code and make functions that work with multiple data types, whereas union types are useful when you want to give a variable the flexibility to hold different types of data.
*/
