/*
Is Raining

If the probability of rain is the same or greater than 50%, return "Take an umbrella."
Otherwise, return "Don't take an umbrella."

Input: A probability of rain (0-100)
Output: "Take an umbrella." or "Don't take an umbrella."
*/

// Receive the probability of rain, and return "Take an umbrella." or "Don't take an umbrella."
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    const probability = parseInt(line);
    if (probability >= 50) {
        console.log("Take an umbrella.");
    } else {
        console.log("Don't take an umbrella.");
    }
    rl.close();
});
