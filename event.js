// select element
// addEvenListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');

btn.addEventListener('click', function() {
heading.classList.add('colors');

});

// keypress - when key is pressed

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function(){
//     console.log('you pressed a key');
// });

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function(event){
//     event.currentTarget.classList.add('red');
// });


// currentTarget - always refers to the element to
 // which the event handler has been attached to

 // target - identifies the element on which the event occured

