const numbers = [10, 20, 30, 40, 50, 60];
const student = {
    name: 'sazzad',
    age: 40,
    married: true,
    learning: ['html', 'css', 'javascript']
}

// 1. Template String
const about = `My name is ${student.name}. I am ${student.age} years old. Presently I am learning ${student.learning[2]}. My score is ${numbers[5]}`;
// console.log(about);

// 2. Arrow Function
const getTwentyFive = () => 25;
const addThirtyFive = num => num + 35;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

// 3. Spread Operator

const newNumbers = [...numbers, 70, 80, 90, 100]; // Create a New Array from an older Array and Add an Element
console.log(newNumbers);

numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);