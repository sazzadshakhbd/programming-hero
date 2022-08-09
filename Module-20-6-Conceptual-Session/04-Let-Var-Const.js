// Difference between const & let?
let age = 18;
console.log(age);

age = 19;
console.log(age)

age = 20;
console.log(age);

const x = 32;
console.log(x);

/*
x = 33;
console.log(x);  // show error
*/

// Difference between var & let  
if (true) {
    var a = 50;
}
console.log(a);

/*
// show error becasue let হচ্ছে block scope
if (true) {
    let y = 60;
}
console.log(y);
*/