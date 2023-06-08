//* Interfaces

/*
In TypeScript, interfaces define contracts between different parts of the code. An interface is a structure that defines a set of related properties and methods for an object. By defining interfaces, you can ensure that objects implement certain properties, methods or functionality in your application. Interfaces help to create loosely coupled codes which can be easily extensible, maintainable and allows for better type checking at compile-time.

You can use interfaces to describe the shape of an object in terms of its properties and their types. You can also describe how objects will behave by defining method signatures in an interface. Interfaces are a powerful tool in TypeScript because they can represent many different kinds of objects and interactions between them.
  
 */

// * Creating an interface
interface Named {
  readonly name: string;
}

interface Greet extends Named {
  greet(phrase: string): void;
}

// * Class implements an interface
class Person implements Greet, Named {
  name: string;
  age = 33;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

// * Implementing an interface
let user1: Greet;

user1 = {
  name: "Frank",
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi there, I am");
