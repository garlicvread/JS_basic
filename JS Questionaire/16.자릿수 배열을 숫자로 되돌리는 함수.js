// Function name: makeNumberFromDigits
// input: numbers
// output: a number made by the digits of the input array

// Example input: [1, 2, 3, 4, 5]
// Example output: 12345

function makeNumberFromDigits(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] * Math.pow(10, numbers.length - i - 1);
    }
    console.log(result);
    console.log(typeof result);
    return result;
}


numbers = [1, 2, 3, 4, 5];
makeNumberFromDigits(numbers);