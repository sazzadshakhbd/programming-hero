// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (a, b = 0) => {
    const total = a + b;
    return total;
}
const result = add(10);
console.log(result);

// This examples are different ways
const add2 = (num1, num2 = 5) => num1 + num2;
console.log(add2(5));