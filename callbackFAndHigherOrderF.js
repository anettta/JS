// callback function - passed to another function as an argument and executed inside that function

// higher order function - accepts another function as an argument or returns another function as a result

// functions are first order objects -
// stored in a variable(expression),
// passed as an argument to another function,
// return from the function(closure)

function morning(name) {
  //callback
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  //callback
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  // higher order
  // we are making higher order function flexible
  // we do not invoke callback function here
  const myName = "anna";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("john", morning);
greet("peter", afternoon);
