// * manually defining the type of the object
const person1: {
  name: string;
  age: number;
} = {
  name: "Anthony",
  age: 15,
};

// * TS infers the type of the object based on the properties
const person2 = {
  name: "Frank",
  age: 33,
};

console.log(person1.name);
console.log(person2.name);
