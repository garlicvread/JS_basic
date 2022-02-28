/*
Selecting Transportation

If the money you have is the same or more than 1000, you can take a taxi.
If the money you have is the same or more than 500, you can take a bus.
If the money you have is the same or more than 300, you can take a subway.
Otherwise, you have to take a walk.
*/


// Receive integer as the money you have, then print out the transportation you can take.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
    const money = parseInt(line);
    if (money >= 1000) {
        console.log("taxi");
    } else if (money >= 500) {
        console.log("bus");
    } else if (money >= 300) {
        console.log("subway");
    } else {
        console.log("walk");
    }
    rl.close();
});
