/*
If the inputted password meets constraints 1, 2, 3, 4 at the same time,
or it meets the constraints 5, 6, 7 at the same time,
return true otherwise return false.

Constraints A:
1. a <= b
2. a = d
3. b > c
4. c < 6

Constraints B:
5. a = b
6. a = c
7. a = d

The input is a string that consists of 4 numbers.
The output is a boolean.

Example input 1: 2 2 2 2
Example output 1: true

Example input 2: 4 6 8 3
Example output 2: false
 */


// Check if the inputted password meets constrains A and B.
// First, you need to receive the inputted password.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    const password = line.split(" ");
    const a = parseInt(password[0]);
    const b = parseInt(password[1]);
    const c = parseInt(password[2]);
    const d = parseInt(password[3]);
    if (a <= b && a === d && b > c && c < 6) {
        console.log(true);
    } else if (a === b && a === c, a === d) {
        console.log(true);
    } else {
        console.log(false);
    }
    rl.close();
});
