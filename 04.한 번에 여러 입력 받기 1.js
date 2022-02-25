/*

Receiving Several Inputs at Once

To receive several inputs that divided by a space, you can use .split() method.
For example, if you want to receive two numbers 100 200, you can use the following code.


    var input = []

    rl.on("line", function (line) {
        input = line.split(" ");
        rl.close();
    }).on("close", function () {
    });


With this code, you can receive two numbers 100 200 then store them in "input" array.

*/

//Code to receive several inputs that are divided by a space.
//The output shows the data of the array line by line.

//Example input: 100 200 300

//Example output:
//100
//200
//300

//Note that you can use indexing something like "input[index]" to show each element of the array.


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = []


// //variation 1

// rl.on("line", function (line) {
//     input = line.split(" ");
//     rl.close();
// }).on("close", function() {
//     input.forEach(element => {
//         console.log(element);
//     })
//     process.exit();
// });


//variation 2

rl.on("line", (line) => {
    input = line.split(" ").map(element => parseInt(element));
    rl.close();
});

rl.on("close", () => {
    input.forEach(element => {
        console.log(element);
    })
    process.exit();
})
