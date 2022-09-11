/* 
    Truthy:
    1. True
    2. Any Number (+ve, -ve) will be truthy other then 0
    3. Any string is truthy other then empty string
    4. '0', 'false' is truthy
    5. {}
    6. []

    Falsy:
    1. false
    2. 0
    3. '' [empty string]
    4. undefined
    5. Null

*/

const x = false;
if (x) {
    console.log('Value of x is Truethy')
} else {
    console.log('Value of x is falsy')
}

// Any Number (+ve, -ve) will be truthy other then 0
// const y = 10;
// const y = -10;
const y = 0;
if (y) {
    console.log('Value of y is Truethy')
} else {
    console.log('Value of y is falsy')
}

// Any string is truthy other then empty string
// const z = 's';
// const z = ' ';
// const z = '';
// const z = '0';
const z = 'false';
if (z) {
    console.log('Value of z is Truethy')
} else {
    console.log('Value of z is falsy')
}


// Undefined, null is falsy
// let a;
let a = null;
console.log(a);
if (a) {
    console.log('Value of a is Truethy')
} else {
    console.log('Value of a is falsy')
}


// Empty Object is truthy
// let b = {};
// let b = { name: 'sazzad', age: 50 };
// let b = [];
let b = [5, 6]
if (b) {
    console.log('Value of b is Truethy')
} else {
    console.log('Value of b is falsy')
}



// Optional
// Check Falsy
// const c = ''
const c = null
if (!c) {
    console.log('value of c is falsy')
}

// Check Truthy
// const f = ' ';
// const f = 50;
const f = { name: 'sazzad' }
if (!!f) {
    console.log('value of f is truthy')
}