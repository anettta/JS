// window object = tab we currently operation = browser api

const h1 = document.getElementById('title'); 

h1.style.color = 'purple';

const btn = document.getElementById('btn');

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';

// getElementsByTagName('tagname');

const headings = document.getElementsByTagName('h2');

headings[0].style.color = 'green';
// console.log(headings.length);

const items = document.getElementsByTagName('li');
items[1].style.color = 'orange';
const betterItems = [...items]; 

betterItems.forEach(function(item){
    // item.style.color = 'red';
});

console.log(items);
console.log(betterItems);

// getElementsByClassName('classname');

const listItem = document.getElementsByClassName('list');
listItem[0].style.color = 'pink';




// querySelector     #ID .Class       !!!!!!!!!!!!!!
const result = document.querySelector('#list');
result.style.backgroundColor = 'purple';

const lastItem = document.querySelector('li:last-child');


console.log(lastItem);

const list = document.querySelectorAll('.special');

list.forEach(function(item){
    item.style.color = 'green';
});
