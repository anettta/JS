// 1 inch 2.54cm

const wallHeight = 80;

function calculate(value) {
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];

console.log(dimensions);

// function expressions
const add = function (num1, num2) {
  return num1 + nums2;
};

// error function
const multiply = (a, b) => a + b;
