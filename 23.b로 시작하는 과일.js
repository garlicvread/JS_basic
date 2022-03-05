/*
Find the fruits that start with 'b' from the given array and return how many of them are there.
You are going to use for loop and conditional statement.
Print the result on the webpage.

Note that you can use indexOf() method to find the index of the given character.

Example output: b로 시작하는 과일은 2개
*/


const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0;  // store the number of fruits that starts with 'b'

for (i = 0; i < fruits.length; i++) {
    if (fruits[i].indexOf('b') === 0) {
        sum++;
    }
}

document.write(`b로 시작하는 과일은 ${sum}개`);
