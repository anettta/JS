// [1,2,3,4,5]
// d = 2(rotations)

function leftRotations(arr, d) {
    let inputArray = arr.slice(); // [1,2,3,4,5] just a shallow copy of the arr
    console.log(inputArray);
    for(let i = 0; i < d; i++){
        let temp = inputArray.shift(); // 1
        console.log(temp);
        inputArray.push(temp);
        console.log(inputArray);
    }
    return inputArray;
}

leftRotations([1,2,3,4,5], 1);