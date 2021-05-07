const btn = document.querySelector('.btn');

const heading = document.createElement('h1');




var reversedArray = [1, 4, 3, 2];

heading.innerHTML = `<h1>${reversedArray}</h1>`
  heading.style.backgroundColor = "red";
   heading.style.color = "white";
//    const title2 = document.createTextNode('An array of integers');
//   heading.appendChild(title2);
document.body.appendChild(heading);


var l = 0; // index 0

var r = reversedArray.length - 1; // index 3

while(l<r){ 
    var temp = reversedArray[l]; // 1     // 4

    console.log(temp);

    reversedArray[l] = reversedArray[r]; // 2   // 3

    console.log(reversedArray[l]);

    reversedArray[r] = temp; // 1    // 4

     console.log(reversedArray[r]); // [2, 4, 3, 1]   // [2, 3, 4, 1]

    ++l; //moved to the next element in an array 4
    --r; // moved back one element 3

}


  var reversedArrayOfInts = reversedArray;



console.log(reversedArrayOfInts);


 

btn.addEventListener("click", function(){
     const heading2 = document.createElement('h1');

   heading2.style.backgroundColor = "green";
   heading2.style.color = "white";
heading2.innerHTML = `<h1>${reversedArrayOfInts}</h1>`
// document.body.removeChild(heading);
// document.body.appendChild(heading2);
   
document.body.replaceChild(heading2, heading);

    

});