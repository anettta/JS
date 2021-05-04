// global scope vs local scope
// any variable outside code block {} is said to be in global scope
// van be access anywhere in the program
// name collisions, modify by mistake
// variable lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2){
    const result = num1 + num2 + globalNumber;
    return result;
}

console.log(add(3,4));

