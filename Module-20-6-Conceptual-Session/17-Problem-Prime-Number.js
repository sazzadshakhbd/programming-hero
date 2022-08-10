/*
    Problem-10:

Write a JavaScript function that accepts a number as a parameter and check
the number is prime or not.


*/

function primeNumber(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(num, 'Prime Number')
    } else {
        console.log(num, 'Just Number')
    }
}


console.log(primeNumber(2));
console.log(primeNumber(1));
console.log(primeNumber(0));
console.log(primeNumber(6));
console.log(primeNumber(7));
