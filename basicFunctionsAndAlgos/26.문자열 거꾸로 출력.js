// Using for loop, reverse the inputted string and print it with document.write().

function reverse(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverse('Nice to meet you'));