// Input: number, operator, number
// Check if the operation is correct or not.
// If the operation is true, return true or false.

// The list of Operators: <, >, ==

// Example input: String, 100 < 300
// Example output: true

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on("line", (line) => {
    // Split the inputted string by space and put it into an array "splitStr".
    let splitStr = line.split(" ");

    // Check if the inputted string is properly splitted.
    console.log(splitStr);

    for (let i = 0; i < splitStr.length; i++) {
        console.log(splitStr[i])
        console.log(typeof splitStr[i])
    }

    // Change the type of splitStr[0] and splitStr[2] to number.
    let first = Number(splitStr[0]);
    let second = Number(splitStr[2]);
    let operator = splitStr[1];

    // Compare the variable "first" and "second" by the operator "operator".
    switch (operator) {
        case "<":
            if (first < second) {
                console.log(true);
            } else {
                console.log(false);
            }
            break;

        case ">":
            if (first > second) {
                console.log(true);
            } else {
                console.log(false);
            }
            break;

        case "==":
            if (first == second) {
                console.log(true);
            } else {
                console.log(false);
            }
            break;
    }
    process.exit();
});
