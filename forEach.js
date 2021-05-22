// forEach does not return a new array
// looking for a callback function

const people = [
  { name: "bob", age: 20, job: "developer" },
  { name: "peter", age: 25, job: "designer" },
  { name: "susy", age: 30, job: "manager" },
];

function showPerson(person) {
  // person allows me to access people's array
  console.log(person.job.toUpperCase());
}

// people.forEach(showPerson); // do not invoke a function!

people.forEach(function (person) {
  // pass in error functions directly
  // anonymous callback function
  console.log(person.job.toUpperCase());
});
