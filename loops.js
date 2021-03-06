// loops
// repeatedly run a block of code while condition is true
// while loop
// TURN OFF AUTOSAVE

let amount = 10;

while (amount > 0) {
  console.log("I have  " + amount + "dollars and I am going to the mall");
  amount--; // IMPORTANT! this is how you escape the loop
}

// do while loop
// will run at least once
// code block first, condition second
let money = 0;

do {
  console.log("You have " + money + "dollars");
  money++;
} while (money < 10);

// for loop

let i;
for (i = 0; i < 10; i++) {
  console.log("and the number is : " + i);
}

for (let number = 11; number >= 0; number--) {
  console.log("and the number is : " + number);
}
