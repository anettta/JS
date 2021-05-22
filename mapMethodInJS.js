// powerful
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: "bob", age: 20, job: "developer" },
  { name: "peter", age: 25, job: "designer" },
  { name: "susy", age: 30, job: "manager" },
];

const ages = people.map(function (person) {
  // new array since we assigned it to a new variable
  // depends on how many items are in original array
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return { firstName: person.name.toUpperCase(), oldAge: person.age + 20 };
});
