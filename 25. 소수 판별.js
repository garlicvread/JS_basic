// 매개변수 n이 소수라면 true, 아니면 false 반환

function isPrime(n) {
    let divisor = 2;

    if (n == 1) return false;

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}


for (let i = 11; i <= 20; i++) {
    console.log(i, isPrime(i));
}
