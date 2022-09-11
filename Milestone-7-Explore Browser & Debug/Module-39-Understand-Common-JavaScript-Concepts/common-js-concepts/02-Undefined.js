// 8 ways to get undefined


// 1. Variable that is not initialized will give undefined
let first;
console.log(first);

// 2. Function with No Return
function addSum(a, b) {
    const total = a + b;
}
const result = addSum();
console.log(result);

// 3. Parameter that is not passed will be undefined
function myFun(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
myFun(10, 15);

// 4. If return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    } return a + b;
}
const total = noNegative(2, -5)
console.log(total);

// 5. Property that does not exist on an object will give you undefined
const student = { name: 'sazzad', age: 40 }
console.log(student.age, student.salary);

// 6. Accessing Array Elements Outside of the index range
const numbers = [12, 45, 39, 40];
console.log(numbers[1], numbers[4], numbers[10]);

// 7. Deleting an element inside an array.
const fruitsPrice = [100, 200, 300, 400];
// You should not do it. Instead use splice
delete fruitsPrice[2];
console.log(fruitsPrice);

// 8. Set a value directly to undefined
const foot = undefined;
console.log(foot);

const football = null
console.log(football);

const data = { results: [], updated: null }
console.log(typeof undefined);

console.log(typeof null);