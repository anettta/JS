// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild
const result = document.querySelector("#result");
const allChildren = result.childNodes;
const children = result.children;

console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);

// parentElement

const heading = document.querySelector("h2");
const parent = heading.parentElement.parentElement;
parent.style.color = "green";

// previousSibling
// nextSibling

const first = document.querySelector(".first");
const last = document.querySelector("#last");

// const second = (first.nextSibling.nextSibling.style.color = 'red');

// const previous = (last.previousSibling.previousSibling.style.color = 'purple');

first.nextElementSibling.style.color = "yellow";

// nodeValue
// textContent

const item = document.getElementById("special");
const value = item.firstChild.nodeValue; //childNode[1] == firstChild
console.log(value);

const easyValue = item.textContent;
console.log(easyValue);
