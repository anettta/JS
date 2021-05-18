// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = "";

if (text) {
  console.log("the value is Truthy");
} else {
  console.log("the value is Falsy");
}
