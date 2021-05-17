const person = {
  name: "John",
  lastName: "Smith",
  age: 40,
  education: true,
  married: false,
  siblings: ["Anna", "Susan", "Peter"],
  greeting() {
    console.log("Hello my name is John");
  },
};

const age = person.age;
console.log(age);
person.greeting();
