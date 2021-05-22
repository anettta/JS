// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: "bob", age: 20, job: "developer", salary: 1000 },
  { name: "peter", age: 25, job: "designer", salary: 800 },
  { name: "susy", age: 30, job: "manager", salary: 1100 },
];

const total = people.reduce(function (acc, currItem) {
  return acc; // YOU MUST RETURN AN ACCUMULATOR
}, 0); // 0 is the value we are returning (a number or an array or an object {})
