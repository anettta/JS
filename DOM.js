// DOM

// select the element

// decide the effect we want to apply to the selection

document.body.style.backgroundColor = 'yellow';

document.getElementById('btn').style.color = 'purple';

//assign to a variable

var btn = document.getElementById('btn');

// do sth

document.querySelector('btn'); // do something

// returns a node object or a node list

const name = btn.nodeName;

const css = btn.style;

console.log(btn);
console.log(name);