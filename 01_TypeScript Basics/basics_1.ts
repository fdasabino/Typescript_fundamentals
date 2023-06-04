// * ✅ Core types in TS: number, string, boolean - all lowercase

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// * ✅ Core types in TS: object - lowercase
// ? 💡 typescript representation of an object
const person: {
  name: string;
  age: number;
} = {
  name: "Anthony",
  age: 15,
};

//? 💡 type inference: typescript infers the type of the object based on the properties
const person2 = {
  name: "Frank",
  age: 33,
};

console.log(person);
console.log(person2);

// * ✅ Core types in TS: array - lowercase => string[], number[], any[]
const person3 = {
  name: "Carl",
  age: 33,
  //? 💡 type inference: typescript infers the type of the array based on the properties
  hobbies: ["Sports", "Cooking"],
};

console.log(person3);

for (const hobby of person3.hobbies) {
  console.log(person3.name, hobby.toUpperCase());
}

// * ✅ Core types in TS: tuple - lowercase
// ? 💡 tuple is a type that allows you to express an array with a fixed number of elements. The types of the elements don’t have to be same.
const person4: {
  name: string;
  age: number;
  role: [number, string]; //tuple
} = {
  name: "Anthony",
  age: 33,
  role: [2, "author"],
};

console.log(person4);

// * ✅ Core types in TS: enum - lowercase
// ? 💡 enums are a way of giving more friendly names to sets of numeric values.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person5 = {
  name: "Jessica",
  age: 33,
  role: Role.ADMIN,
};

if (person5.role === Role.ADMIN) {
  console.log(person5);
  console.log(person5.name + " is admin");
}

// * ✅ Core types in TS: any - lowercase
// ? 💡 any is a type that represents any kind of value, no specific type assignment avoid using any as much as possible

let anyType: any;
anyType = 5;
anyType = "string";
anyType = true;

// * ✅ Core types in TS: union - lowercase
// ? 💡 union is a type that represents values that can be one of several types
const combine = (n1: number | string, n2: number | string) => {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
};

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Max", "Anna");
console.log(combineNames);

// * ✅ Core types in TS: literal - lowercase
// ? 💡 literal is a type that represents exact value
const combine2 = (
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-string"
) => {
  if ((typeof n1 === "number" && typeof n2 === "number") || resultConversion === "as-number") {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
};

const combineAges2 = combine2(30, 26, "as-number");
console.log("Combined numbers: ", combineAges2);

const combineStringAges = combine2("30", "26", "as-string");
console.log("Combined numbers as strings: ", combineStringAges);

const combineNamesAsNumber2 = combine2("Max", "Anna", "as-number");
console.log("Combined strings as numbers: ", combineNamesAsNumber2); // NaN

const combineNames2 = combine2("Max", "Anna", "as-string");
console.log("Combined strings as strings: ", combineNames2);

// * ✅ Core types in TS: alias - uppercase
// ? 💡 alias is a custom type that represents a type that already exists
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

const combine3 = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

const combineAges3 = combine3(30, 26, "as-number");
console.log("Combined numbers: ", combineAges3);

const combineNames3 = combine3("Max", "Anna", "as-string");
console.log("Combined strings: ", combineNames3);
