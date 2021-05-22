// Date

const date = new Date(`1/12/2004`);

const months = ["Jan", "Feb", "Mar", "Apr", "May"];

const days = ["Mon", "Tue"];

const month = date.getMonth(); // just to return index

const day = date.getDay(); // just to return index

console.log(months[month]);

console.log(days[day]);

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
