// * ✅ functions as a custom type in TS
// ? 💡 Is often a good to let ts infer types unless you need to assign a specific type

function add(n1: number, n2: number) {
  return n1 + n2;
}

// * ✅ void type in TS
/* 
💡
// ? In TypeScript, the void return type is used to indicate that a function does not have a return value.
// ? Functions that have a void return type may still perform some action or side effect, but they do not produce a 
// ? result that can be assigned or consumed.
// ? void is a type that represents nothing
 👇
*/
function printResult(num: number): void {
  console.log("Result: " + num);
}
printResult(add(5, 12));

// * ✅ function types in TS

// ? 💡👇 Function types are types that describe a function regarding the parameters and the return value
let combineValues: (a: number, b: number) => number;
combineValues = add;

// ! combineValues = printResult; ==> Error: TS2322: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// ! combineValues = 5; ==> Error: TS2322: Type '5' is not assignable to type 'Function'.
console.log(combineValues(8, 8));

// * ✅ function types and callbacks in TS
// ? 💡Function callback is a function that is passed to another function as an
// ? argument and is executed after some operation has been completed 👇

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// * ✅ unknown type in TS
// ? 💡unknown is a type-safe version of any

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// ? 💡👇 unknown is not assignable to type string
// ! userName = userInput;  ==> Error: TS2322: Type 'unknown' is not assignable to type 'string'.

// * ✅ never type in TS
// ? 💡never is a type that represents a value that never occurs

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
