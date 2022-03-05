/*
With the inputted AB (at bat, 타수) and H (hit, 안타), you can calculate the HA (hit average, 타율).

For example, if H is 5 and AB is 8, then HA = H/AB = 5/8 = 0.625.
This HA reads as 6할 2푼 5리 in Korean language.

When a baseball player records AB as 16 and H as 6, then the current HA of him is H/AB = 6/16 = 3할 7푼 5리.
You are going to return the HA of that player afterwards with the new AB and H information inputted.

Note that if any of 할, 푼, or 리 is 0, then you should not return any of them.
Round down the HA at the fourth decimal place if the calculation has more than fourth decimal place.


Example input 1
3
2

Example output 1
4할
2푼
1리


Example input 2
5
2

Example output 2
3할
8푼


Note that you need to receive the input that consists of two lines.
A simple way to implement this is to declare a new variable to store the input.
When the length of the array equals to 2 then call rl.close();.
*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declare a new variable to store the input.
let input = [];

// Declare the basic information of the player; H and AB: H = 6, AB = 16.
const H = 6;
const AB = 16;


// Receive input that consists of two lines.
rl.on('line', function(line) {
    // Push the input into the array.
    input.push(line);

    // Calculate the new HA of the player.
    if (input.length === 2) {
        console.log(H);
        console.log(AB);
        console.log(H/AB);

        let newH = parseInt(H) + parseInt(input[1]);
        let newAB = parseInt(AB) + parseInt(input[0]);
        console.log(newH);
        console.log(newAB);

        let newHA = newH/newAB;
        console.log(newHA);

        // Convert the newHA into a string.
        let newHA_str = newHA.toString();

        // Remove the substring "0." from the string.
        if (newHA_str.indexOf("0.") === 0) {
            newHA_str = newHA_str.substring(2);
        }
        // console.log("new STR" + newHA_str);

        // Round down the newHA_str at the fourth decimal place then print the result.
        if (newHA_str.length >= 4) {
            newHA_str = newHA_str.substring(0, 3);
        }
        // console.log(newHA_str);  // To check the string

        // Split the newHA_string into each character.
        let newHA_str_arr = newHA_str.split("");

        // Print the result. If any of the character is 0, do not return it.
        if (newHA_str_arr[0] !== "0") {
            console.log(newHA_str_arr[0] + "할");
        }
        if (newHA_str_arr[1] !== "0") {
            console.log(newHA_str_arr[1] + "푼");
        }
        if (newHA_str_arr[2] !== "0") {
            console.log(newHA_str_arr[2] + "리");
        }

        // Close the readline interface.
        rl.close();
    }
});
