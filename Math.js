// Math
// Standard built-in objects - always available

const number = 25;

const result = Math.floor(number); // rounds num down

console.log(result);

const result2 = Math.ceil(number); // rounds num up

console.log(result2);

const result3 = Math.sqrt(number);

console.log(result3);

const resultPI = Math.PI;

console.log(resultPI);

const min = Math.min(3, 5, 7);

console.log(min);

const max = Math.max(8, 9, 3);

console.log(max);

// random returns values between 0 and 0.9999999999
// its never going to be 1
// if we multiply by 10, we get bigger numbers
const random = Math.ceil(Math.random() * 10); // you get 1 to 10
// or use floor and + 1 to get 1 instead of 0 and 10 instead of 9
// Math.floor(Math.random() * 10 + 1);
console.log(random);
