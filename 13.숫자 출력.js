/*
Write a code that prints the numbers from 1 to the inputted value.
When you print out the numbers, you need to include a comma between each number.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    const num = parseInt(line);
    let result = '';
    if (num === 1) {
        console.log(1);
    } else {
        for (let i = 1; i <= num; i++) {
            result += i + ', ';
        }
        console.log(result.slice(0, -2));
    }
    rl.close();
});

