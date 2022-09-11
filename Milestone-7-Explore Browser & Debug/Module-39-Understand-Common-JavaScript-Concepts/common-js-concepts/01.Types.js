// Strongly Typed Language

/*
    int a = 5;
    string b = 'sazzad';
    bool c = True;
    object student = {name:'sobuz', id= 10};
    int[] numbers = [12, 45, 78]
    string[] friends = ['Adib', 'Adiba']
*/

// Javascript is a Dynamic Type Language

// Primitive Type language
const a = 5;
const b = 'I love my country';
const c = true


// Non Primitive Language
const age = [12, 34, 56];
const student = { id: 23, class: 7 };

// console.log(typeof a, typeof b, typeof c, typeof age, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;
// q = { job: 'Backend Developer' }
q.job = 'Front End Developer'
console.log(p, q)