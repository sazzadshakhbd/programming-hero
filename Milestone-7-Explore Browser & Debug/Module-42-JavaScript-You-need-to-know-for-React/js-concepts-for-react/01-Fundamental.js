// 1. How to decleare a variable usign let & const?
const fatheName = 'Mohon Shakh'
let season = 'Winter';
season = 'rainy';

// 2. Conditions...

//  6 Conditions: >, <, ===, !==, <=, >=
// Multiple Conditions: &&, ||

if (fatheName === 'Mohon Shakh' || season === 'rainy') {

} else if (fatheName === 'mohon') {

} else {

}

// 3. Array Decleare, Array Index, Length, Push
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 50;

// 4. For Loop, While Loop
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // console.log(num, i);
}

// 5. Function
function multiply(a, b) {
    const result = a * b;
    return result;
}
const output = multiply(5, 6);
console.log(output);

// 6. Object, 3 ways to Access Property By Name
const student = {
    name: 'sazzad',
    age: 40,
    married: true,
    learning: ['html', 'css', 'javascript']
}
const myVariable = 'age';
console.log(student.age); // Directly access by using property
console.log(student['age']); // Access via property name string
console.log(student[myVariable]); // Access via property name in a variable