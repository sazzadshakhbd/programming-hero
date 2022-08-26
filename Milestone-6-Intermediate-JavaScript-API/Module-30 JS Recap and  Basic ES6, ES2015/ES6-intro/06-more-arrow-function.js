const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

// console.log(multiply(7, 8));

const addAll = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g;

// No Parameter Arrow Function
const getPie = () => 3.14;

// One parameter
const doubleIt = (num) => num * 2;

// One Parameter Simple Version
const fiveTimes = num => num * 5;

// Multiline Arrow Function
// If you want to return something, use the return

const doMath = (x, y, z) => {
    const num1 = x + y;
    const num2 = y + z;
    const num3 = num1 * num2;
    const num4 = num3 / 2
    const result = num4;
    return result;
}
const x = doMath(10, 20, 30);
console.log(x);


// Google Search: Difference between arrow function and regular function
