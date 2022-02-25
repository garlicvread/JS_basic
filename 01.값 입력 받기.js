/*
Receiving a value

To receive a value through the console in JavaScript, you can use the readline module.
To import the readline module, use the following code:


    const readline = require("readline");


After importing the readline module, you can use the readline.createInterface() method to create a readline interface.
This interface object is used to create an input stream and output stream for the readline module.
You can use the following code to create a readline interface:


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


The rl object can be used as follows:


    rl.on("line", (line) => {
        // This code runs after the line-by-line input.
        // The inputted values will be stored to the line object.
        rl.close(); // Without close(), the input will be kept.
    });
    rl.on('close', () => {
        //You can put the code here that will run after the input is done.
    })

*/


//The code below will show the inputted value to the console without any change.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    console.log(line);
    rl.close();
});

rl.on("close", () => {
    process.exit();
});
