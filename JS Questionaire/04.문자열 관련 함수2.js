// Function repeatString
// Inputs: str, num
// Output: iterate str num times

function repeatString(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

let inputA = "abc";
let inputB = 3;

document.writeln(repeatString(inputA, inputB));
