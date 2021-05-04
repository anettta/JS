// Powerful array methods
// forEach, map, filter, find, reduce
// iterate over array - no for loop required
// accepts callback function as an argument, calls callback against each item in an array.
// reference item in the callback parameter.

//--------------------------------------

// forEach; does not return new array

const people = [
    {name: 'bob', age:20, position: 'developer', id: 1, salary: 200},
    {name: 'peter', age:25, position: 'designer',id: 2, salary: 300},
    {name: 'susy', age:30, position: 'boss', id: 3, salary: 500}
];

// function showPerson(person) {
//    console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);

// people.forEach(function(item){
// console.log(item.position.toUpperCase());
// });


//--------------------------------------

// map; does return a new array


// const ages = people.map(function(person){

// return person.age + 20;
// });
// const newPeople = people.map(function(person){
// return  {firstName:person.name.toUpperCase(),
// oldAge: person.age + 20,};
// });

// const names = people.map(function(person){
// return `<h1>${person.name}</h1>`
// });

// document.body.innerHTML = names.join("").toUpperCase();
// console.log(names);

//--------------------------------------

//filter, does return a new array

// const youngPeople = people.filter(function(person){
//     return person.age <= 25;

// });

// const developers = people.filter(function(person){
//     return person.position === 'developer';
// })

// console.log(developers);

//--------------------------------------

//find, return a single instance - (in this case object)
// searching unique values

// const names = ['bob', 'peter'];

// console.log(names.find(function(name){
//     return name  === 'bob';
// }));


// const person = people.find(function(person){
//     return person.id === 3;
// })


// console.log(person.name);

// const person2 = people.filter(function(person){
//     return person.id === 3;
// })

// console.log(person2);



//--------------------------------------

// reduce, iterates,callback function
// reduces to a single value - number, array, object


const total = people.reduce(function(acc, currItem){
    console.log(`total ${acc}`);
    console.log(`current money : ${currItem.salary}`);
    acc += currItem.salary;
    return acc;

},0);

console.log(total);