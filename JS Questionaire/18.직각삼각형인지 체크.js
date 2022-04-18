// function name: isRightTriangle

// Input: An array of 3 numbers. The first element will be the longest side.
// Output: true or false

// Elements to be inputted: inputA, inputB, inputC
// Output: boolean

function isRightTriangle(inputA, inputB, inputC) {
    if (inputA**2 === inputB**2 + inputC**2) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

var inputA = 5;
var inputB = 3;
var inputC = 4;

isRightTriangle(inputA, inputB, inputC);