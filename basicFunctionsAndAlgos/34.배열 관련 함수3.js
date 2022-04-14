// Function addMiddleNumbers
// Input: An array of seven numbers
// Output: The addition of second, fifth, and seventh numbers

function addMiddleNumbers (array) {
  return array[1] + array[4] + array[6];
}

let arr = [1, 2, 3, 4, 5, 6, 7];

document.writeln(addMiddleNumbers(arr));
