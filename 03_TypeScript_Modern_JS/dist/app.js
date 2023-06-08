"use strict";
class Person {
    name;
    age = 33;
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = {
    name: "Frank",
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet("Hi there, I am");
