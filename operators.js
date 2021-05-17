// there are 7 data types in JS: primitive and object
// primitive: string, number, boolean, symbol, null and undefined
// object: arrays, functions, objects
// typeof operator

// Null and Undefined
// both represent "no value"

// Undefined - "javascript can not find value for this"

// variable without value
// missing function arguments
// missing object properties

// null - "developer sets the value";

let number = 20 + null; // 20 + 0;

// truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = ``;

if (text) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

// unary operator - typeof
let text = "text";
console.log(typeof text);

// binary operator - assignment
let num = 3;
let num2 = 2 + 6;
// ternary operator
// condition ? (runs if true) : (runs if false)

const value = 1 < 0;
value ? console.log("true") : console.log("false");
