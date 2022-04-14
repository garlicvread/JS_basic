// Sum all the prime numbers between 1 and 200.

let total = 0;  // total sum of the prime numbers. initialized to 0.

// loop from 2 to 200.
// if the number is prime, add it to the total sum.

for (let i = 2; i <= 200; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        total += i;
    }
}

console.log(total);