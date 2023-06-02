// * Arrays, Tuples, Enum in TS

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // * Tuple
} = {
  name: "Frank",
  age: 33,
  hobbies: ["Sports", "Cooking"],
  role: [2, "developer"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// * Tuple in TS (fixed length array)

person.role.push("admin"); // * push() is an exception to the fixed length array

// ! person.role[1] = 10; // * error because the second element of the tuple is a string
// ! person.role = [0, "admin", "user"]; // * error because the tuple has a fixed length of 2

// * Enum in TS (custom type)
