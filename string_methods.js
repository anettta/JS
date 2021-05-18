// string properties and methods
// google search :)

let text = " hello ther";

let result = text.length;

// strings zero based
console.log(result);
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("h")); // case sensitive!
console.log(text);
console.log(text.trim()); // get rid of whitespaces at the beginning
console.log(text.trim().toLowerCase().startsWith("hello"));
console.log(text.includes(" "));
console.log(text.slice(2)); // beginning of the string and the rest if second index was not specified
console.log(text.slice(-2)); // end of the string
// const person = {
//   name: "peter",
//   greeting() {
//     return "Greetings";
//   },
// };
