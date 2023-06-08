"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
promise.then((data) => {
  data.split(" ");
});
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
const mergedObj = merge(
  { name: "Frank", hobbies: ["sports"], job: "Developer" },
  { age: 33, birthYear: 1990 }
);
console.log(mergedObj);
function countAndDescribe(element) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("Hi there my name is Frank!"));
function extractAndConvert(obj, key) {
  return obj[key];
}
console.log(extractAndConvert({ name: "Frank" }, "name"));
console.log(extractAndConvert({ age: 33 }, "age"));
class DataStorage {
  data = [];
  addItem(item) {
    this.data.push(item);
    console.log("Added =>", this.data);
  }
  removeItem(item) {
    if (this.data.includes(item)) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage();
textStorage.addItem("Frank");
textStorage.addItem("Anna");
textStorage.removeItem("Frank");
console.log(textStorage);
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage);
