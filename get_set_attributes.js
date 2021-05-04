// getAttribute(), setAttribute()

const first = document.querySelector('.value');
const classValue = first.getAttribute('class');
// console.log(classValue);

const link = document.getElementById('special');
const showLink = link.getAttribute('id');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);
