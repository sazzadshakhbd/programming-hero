// Function Declearition
function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

// Function Expression
const add1 = function add1(num1, num2) {
    const result = num1 + num2;
    return result;
}

// Function Expression With Anonymous
const add2 = function (num1, num2) {
    const result = num1 + num2;
    return result;
}

// Optimize Function:1
function sum(num1, num2) {
    return num1 + num2;
}

// Optimize Function:2
const add5 = function sum(num1, num2) {
    return num1 + num2;
}

// Arrow Function
const add6 = (num1, num2) => num1 + num2;


const result = add6(10, 20);
console.log(result);


// Interview Quesions:
//  Difference between regular function/ function expression/ function declearation and Arrow Function.