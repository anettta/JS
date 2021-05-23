// getElementsByTagName('tagname');
const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red"; // first index

const items = document.getElementsByTagName("li"); // NODE LIST
items[2].style.color = "orange";
const betterItems = [...items]; // ARRAY
betterItems.forEach(function (item) {
  console.log(item);
});
