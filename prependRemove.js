//prepend
// innerText

const heading = document.createElement('h2');
heading.innerText = 'i am a dynamic heading';

document.body.prepend(heading);

//remove
// removeChild

const result = document.querySelector('#result');
// result.remove();

const heading = result.querySelector('h1');

result.removeChild(heading);

console.log(heading);