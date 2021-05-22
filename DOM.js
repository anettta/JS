// DOM - DOCUMENT OBJECT MODEL

// STEP 1: select the element

// STEP 2: decide the effect we want to apply to the selection

// we are selecting a body and applying changes to it
document.body.style.backgroundColor = "yellow";

// IDs need to MATCH
document.getElementById("btn").style.color = "purple";

// we can assign selected element to a variable
var btn = document.getElementById("btn");

document.querySelector("btn"); // do something

// returns a node object or a node list

const name = btn.nodeName; // BUTTON

const css = btn.style;

console.log(btn);
console.log(name);
