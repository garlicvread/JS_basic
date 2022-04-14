/*
3-6-9 game

You are given an array of integers from 1 to 30.

When you meet 3, 6, or 9 in the elements of the array, you should print "Clap!"

Each number of "Clap!" should be printed in a new line.
 */

arr = []

for (let i = 1; i <= 30; i++) {
    arr.push(i)
}

const regex_369 = /3|6|9/g;

function game_369(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().match(regex_369)) {
            console.log("Clap!");
        } else {
            console.log(arr[i]);
        }
    }
}

game_369(arr);
