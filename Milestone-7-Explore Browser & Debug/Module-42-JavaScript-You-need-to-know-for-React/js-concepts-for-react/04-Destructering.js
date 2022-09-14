// 1. Array Destructuring
const numbers = [30, 40];

/*
const x = numbers[0];
const y = numbers[1];
*/

/*
const [x, y] = [30, 40]
*/

const [x, y] = numbers;
// console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums
}

// const [first, secoend] = [10, 20]
// const [first, secoend] = boxify[10, 20];
const result = boxify(10, 20)
// console.log(result);


const student = {
    name: 'sazzad',
    age: 40,
    married: true,
    learning: ['html', 'css', 'javascript']
}
const [a, b, c] = student.learning;
console.log(a, b, c);


// 2. Object Destructuring
const { name, age } = { name: 'sazzad', age: 40 };

const employee = {
    ide: 'Vs Code Editor',
    designation: 'developer',
    machine: 'mac',
    language: ['python', 'c++', 'java'],
    specification: {
        height: 55,
        weight: 80,
        address: 'rajbari',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'casio'
        }
    }
}

const { ide, designation } = employee;
const { height, weight } = employee.specification;
const { color, price } = employee?.specification.watch;
