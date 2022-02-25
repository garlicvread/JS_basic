/*
Receiving Several Inputs at Once 2

To receive several numerical inputs, you need to transform the input into int or float type.
You can use map() function as following code to transform the data type.


    line.split(' ').map((el) => parseInt(el));


With the code above, you can use parseInt() function to transform the str type into int type.
*/


/*
The code to calculate the average of inputted numbers.
The input consists of 3 int type data and is separated by a space.
The code throws out the floating number part of the result.

Example input 1: 100 200 300
Example output 1: 200

Example input 2: 16 25 72
Example output 2: 37

Note: map() is a function to process the data with the given function.
The parameters of map() function are the data and the function that corresponds to each element.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = []

rl.on("line", (line) => {
    input = line.split(" ").map(element => parseInt(element));
    rl.close();
});


rl.on("close", () => {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    var average = sum / input.length;
    console.log(Math.floor(average));
});
