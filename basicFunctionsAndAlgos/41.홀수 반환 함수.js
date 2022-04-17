// Input: array of numbers
// Output: even numbers in the array

function getOnlyOddNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 !== 0;
    });
}
