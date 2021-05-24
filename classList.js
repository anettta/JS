// className - overrides if re-assigned later

// classList - dynamically, updating when adding new classes

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// const classValue = first.className; // colors

second.className = "colors text";

const classValue = third.classList;

third.classList.add("colors", "text");
third.classList.remove("text");

let result = third.classList.contains("text");

if (result) {
  console.log("hi there");
} else {
  console.log("no class");
}
