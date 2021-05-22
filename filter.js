// filter does return a new array
// can manipulate the size of new array
// because it returns values based on condition
const people = [
  { name: "bob", age: 20, job: "developer" },
  { name: "peter", age: 25, job: "designer" },
  { name: "susy", age: 30, job: "manager" },
];
const youngPeople = people.filter(function (person) {
  return person.age <= 25; // filter out our array
});
const developers = people.filter(function (person) {
  return person.job === "developer";
});
