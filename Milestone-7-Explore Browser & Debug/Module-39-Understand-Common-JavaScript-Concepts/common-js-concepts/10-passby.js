let num1 = 5;
let num2 = 7;
// Primitive typea are pass by value
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result
}
console.log(num1)
const output = multiply(num1, num2)
// console.log(output);
console.log(num1)

// Object and array are pass by refer
let studetn1 = { name: 'Jamil', partner: 'Borasha' }
let studetn2 = { name: 'Raj', partner: 'Anika' }

function makeMovie(couple1, couple2) {
    couple1.name = 'Anonto'
    couple2.name = 'Mim'
}
console.log(studetn1, studetn2);
makeMovie(studetn1, studetn2)
console.log(studetn1, studetn2);