

function twoDArray(arr){
    var result = -63; // we start with -63
    var temp = 0;

    // we are looking at hourglass in 6x6 matrix

    for (var i = 0; i < arr.length-2; i++){ // -2 is important since we are out bounds
        for(var j = 0; j < arr.length-2; j++){
            temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] +
            arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]; // i = rows   j = columns
            if(temp > result){
                result = temp;
            }
        }
    }
    return result;

}

//matrix 6 x 6 

alert(twoDArray([[1,1,1,0,1,0],[100,1,1,0,1,0],
[1,1,1,0,1000,0],[1,1,1,0,1000,0],[1,1,1,0,1000,0],[1,1,1,0,1000,0] ]));