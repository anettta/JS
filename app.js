// keypress - when key is pressed

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function(){
//     console.log('you pressed a key');
// });

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event){
    event.currentTarget.classList.add('red');
});