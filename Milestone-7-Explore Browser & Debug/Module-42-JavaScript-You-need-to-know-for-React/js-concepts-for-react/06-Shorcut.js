// Truthy: 'sazzad', 5, true, {}, []
// Falsy: '',  0, null, undefined


// 1. Check Truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 10
} else {
    myVar = 0
}

// 2. Check falsy/negative
let myMoney = 50;
if (!myMoney) {

}

const money = 200;
let food;

if (money > 120) {
    food = 'Fride Rice'
} else {
    food = 'Rice'
}

// 3. Ternary Operator


// const dollar = 100
const dollar = 200
let food1 = dollar > 100 ? 'Birayni' : 'Rice'
// console.log(food1);

let drink = (dollar > 100 && myVar < 500) ? 'Coke' : 'Water'
// console.log(drink);



// 4. Number to String Conversion
const num1 = 10;
// console.log(num1);
const numString = num1 + '';
// console.log(numString);


// 5. String to Number Conversion
const input = '560';
// console.log(input)
const inputNumber = +input;
// console.log(inputNumber);


// 6.
let isActive = true;
// const isActive = false;
const displayUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
// isActive ? displayUser() : hideUser();
// isActive && hideUser();

// use && If the left side is true then right side will be executed 
isActive && displayUser();

// use || if the left side is false then right side will be executed
isActive || hideUser()

// Toogle Boolean
isActive = !isActive
