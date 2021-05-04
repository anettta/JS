// array properties and methods


// length
let names = ['john', 'bobo', 'barry', 'olga', 'ben'];
console.log(names.length); // 5 
console.log(names[names.length-1]); // "4" ben. thats why we put -1

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse

console.log(allNames.reverse());


// unshift
allNames.unshift('susy'); //adds element AT THE BEGINNING of the array

console.log(allNames);

// shift

allNames.shift(); // removes an element AT THE Beginning

console.log(allNames);

// push

allNames.push('susy'); //adds an element at the END
console.log(allNames);

// pop

allNames.pop('susy'); // removes an element at the END
console.log(allNames);

// splice - mutates original array
const specificNames = allNames.splice(2, 1);  //cut out the specific name(s) from the array
console.log(specificNames);
console.log(allNames);




