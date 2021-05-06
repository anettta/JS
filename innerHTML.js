//innerHTML
//textContent

const heading = document.getElementById('result');

const ul = document.createElement('ul');

ul.innerHTML = `<div><li>Value</li></div>`;

document.body.appendChild(ul);