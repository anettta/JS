// querySelector('any class'); - selects single
// querySelectorAll('any class') - selects all
const result = document.querySelector("#result"); // selecting first element
result.style.backgroundColor = "blue";

const item = document.querySelector(".special"); // first instance of a particular class

const list = document.querySelectorAll(".special"); // WE CAN USE FOREACH
list.forEach(function (item) {
  item.style.color = "yellow";
});
