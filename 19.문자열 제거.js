/*
With the inputted string, extract the numbers only then return the result.

Example input: 12qwe34asf45
Example output: 123445


Note that you can use unicodes to solve this problem.
Using STRING.charCodeAt(INDEX), you can get the unicode value of the character at the given index in the string.

Utilize the following table to extract the numbers from the string:

Decimal Shape
48	    0
49	    1
50	    2
51	    3
52	    4
53	    5
54	    6
55	    7
56	    8
57	    9
*/

const readline = require('readline');

// Create the interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    console.log(line.replace(/[^0-9]/g, ''));
  rl.close();
});

