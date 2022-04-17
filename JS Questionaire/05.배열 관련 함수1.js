// Function sortStringArray
// Input: An array that consists of strings.
// Output: A sorted array of the same strings.

function sortStringArray(array) {
    return array.sort();
}

let inputA = ["a", "b", "c", "d", "e"];
let inputB = ["google", "apple", "facebook", "microsoft", "oracle", "amazon", "samsung"];

document.writeln(sortStringArray(inputA));
document.writeln(sortStringArray(inputB));