// Function reverseStringArray
// Input: An array that consists of strings.
// Output: A sorted array in descending order of the same strings.

function reverseStringArray(array) {
    return array.sort(function(a, b) {
        return b.localeCompare(a);
    });
}


let inputA = ["a", "b", "c", "d", "e"];
let inputB = ["google", "apple", "facebook", "microsoft", "oracle", "amazon", "samsung"];

document.writeln(sortStringArray(inputA));
document.writeln(sortStringArray(inputB));
