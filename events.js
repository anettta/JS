const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function(){
    const element = document.createElement('h1');
    element.textContent = 'Hi';
    container.appendChild(element);

});

container.addEventListener('click', function(event){
    if(event.target.classList.contains('red')){
console.log('hi');

    }
});