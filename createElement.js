// createElement

const result = document.querySelector('#result');
const first = document.querySelector('.blue');
// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('hi there');

bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);
// result element

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic text');
heading.appendChild(headingText);


heading.classList.add('colors');
result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('small heading text');

smallHeading.classList.add('blue');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);


console.log(result.children);