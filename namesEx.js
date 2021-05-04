// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'nature';

let newArray = [];

// for loop
for(var i = 0; i < names.length; i++){
    console.log(i);
    console.log(names[i]);
    newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);