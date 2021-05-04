// Date

const date = new Date(`1/12/2004`);

const month = date.getMonth();

const day = date.getDay();

const months = ["Jan", "Feb", "Mar", "Apr","May"];

const days = ["Mon", "Tue"]

console.log(months[month]);

console.log(days[day]);

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;