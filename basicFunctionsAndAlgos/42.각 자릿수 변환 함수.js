// Example input: 12321
// Example output: [1, 2, 3, 2, 1]


/*
// Solution 1
function getDigits(num) {
    let digits = [];

    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        digits.push(Number(numStr[i]));
    }
    return digits;
};
*/


/*
// Solution 2
function getDigits(num) {
    let result = [];

    while (num > 0) {
        result.push(num % 10);
        num = Math.floor(num / 10);
    }

    return result.reverse();
}
*/


// Solution 3
function getDigits(num) {
    let result = num.toString().split('').map(num => Number(num));

    return result;
}
