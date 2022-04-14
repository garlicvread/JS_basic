/*
Sort the elements of the inputted array in ascending order.
Save the length of the given array into the variable "count".

Note that if you use the sort() method, the elements will be sorted by ascii values.
You can use the code below as a parameter of sort() method to sort the elements in ascending order.


    function compareNumbers(a, b) {
        return a - b;
    }
*/

var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

var count = 0;
count += soldier.length;

soldier = soldier.sort(function compareNumbers(a, b) {
    return a - b;
});

console.log(soldier);
console.log(count);
