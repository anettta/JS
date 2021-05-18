// Reference vs Value

// Arrays, Functions, Objects = Object
// typeof

// when assigning primitive data type value to a variable
// any changes are made directly to that value,
// without affection original value

// when assigning non-primitive data type value to a
// variable is done by reference so any changes
// will affect all the references

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);

let person = { name: "bob" };
let person3 = person; // if no copy made, person will changed if i assign another name to person3
let person2 = { ...person }; //this is a copy!!!

person2.name = "susy"; // object is by reference; if copied as shown above, original value will not be affected
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
