/*
Starting with 0, you need to print a Fibonacci sequence.

A natural number will be given, so print a Fibonacci sequence of a maximum number
which is less than the given number.

# The return should start with 0.
Example input 1: 1
Example output 1: [0]

# The next number is 5, but 5 is the same with the inputted number. So, ignore it.
Example input 2: 5
Example output 2: [0, 1, 1, 2, 3]

Example input 3: 15
Example output 3: [0, 1, 1, 2, 3, 5, 8, 13]
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const n = parseInt(line, 10);

    // Generate the fibonacci sequence
    const fibonacci = (n) => {
        const fib = [0, 1];
        for (let i = 2; i <= n; i += 1) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    };

    // Filter the returned array 'fibonacci(n)' by comparing the sequence to the inputted number.
    // Print the sequence up to the element that is 'less' than the input.
    const result = fibonacci(n).filter((element) => element < n);
    console.log(result);
    rl.close();
});
