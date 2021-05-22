// returns single instance - in this case an object
// returns first match, if no match undefined
// great for getting UNIQUE values
const people = [
  { name: "bob", age: 20, job: "developer", id: 1 },
  { name: "peter", age: 25, job: "designer", id: 2 },
  { name: "susy", age: 30, job: "manager", id: 3 },
];

const person = people.find(function (person) {
  return person.id === 3;
});

const names = ["bob", "peter", "susy"];
console.log(
  names.find(function (name) {
    return name === "bob";
  })
);

const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person[0].name); // susy
