// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];

const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // increase by one
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! you are spending too much`);
    return total;
  }
  console.log(`you are good`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

const randomTotal = calculateTotal([200, 2, 2]);

console.log({
  // i can pass in an object to the console
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
