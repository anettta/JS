// Web Storage API - provided by browser

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');


localStorage.setItem('name','john');

const name = localStorage.getItem('name');

console.log(name);

localStorage.removeItem('name');

localStorage.clear();
