// * Object types in TS: object, array, tuple, enum, any, union, literal, type alias
// * manually defining the type of the object
var person1 = {
    name: "Anthony",
    age: 15
};
// * TS infers the type of the object based on the properties
var person2 = {
    name: "Frank",
    age: 33
};
console.log(person1.name);
console.log(person2.name);
