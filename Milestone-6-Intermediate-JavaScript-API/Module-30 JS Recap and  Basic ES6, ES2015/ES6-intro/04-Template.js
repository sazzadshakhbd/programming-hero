const person = 'Sazzad Shakh';
const person2 = "Sobuz Shakh";
const person3 = `Adib Shakh`;


const multiline = 'My name is Sazzad \n' +
    'I live in Dhaka \n' +
    'I have a one son and one daughter';

// console.log(multiline);

const newMultiLine = `
    My name is sazzad
    I live in Dhaka
    I have a one son and one daughter
`
// console.log(newMultiLine);

const a = 20;
const b = 30;
const num = [1, 2, 3, 4, 5, 6];
const sum = 'sum of ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(sum);

// const total = `sum of ${a} and ${b} is ${a + b}`
const total = `sum of ${a} and ${num.length} is ${a + b}`
console.log(total);
