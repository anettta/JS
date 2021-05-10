// function as a reference


const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');

function addColor(){
    let hasClass = heading.classList.contains('blue');
    if (hasClass){
        heading.classList.remove('blue');
    } else {
       heading.classList.add('colors');
    }

}

btn.addEventListener('click', addColor);