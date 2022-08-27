// 1. Var, Let & Constatnt
// Break up with var

const number = [1, 2, 3, 4]; // Not Reassign
let salary = 450;
salary = 455; // Reassign & updated


// 2. Default Parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
console.log(calculateSalary(10));

// Template String
const numbers = [1, 2, 3, 4, 56];
const elementHTML = `

<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(100, 0, 0)} </p>
    <p>Others: ${numbers[0]} </p>
</div>
`

// 4. Arrow Function
const doubleIt = x => x * 2;
const calculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. Spread
const ages = [11, 12, 13, 14, 15, 16, 20,];
const newAges = [...ages, 22, 24, 23];

// Destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'sazzad', salary: 30000 };
const { a, b, ...r } = [12, 45, 21, 65, 98];

