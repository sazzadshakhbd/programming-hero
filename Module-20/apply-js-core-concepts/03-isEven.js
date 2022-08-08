// Even number এ কোন ভাগশেষ থাকে না 
/*
console.log(4 / 2);
console.log(98 / 2);
console.log(144 / 2);
console.log(1286 / 2);
*/

// Odd number এ ভাগশেষ থাকে
/*
console.log(7 / 2);
console.log(83 / 2);
console.log(145 / 2);
console.log(1287 / 2);
*/

// ভাগশেষ - ০ । ভাগ করার পর ভাগশেষ ০ হলে সেটা জোড় সংখ্যা হবে।
/*
console.log(4 % 2);
console.log(98 % 2);
console.log(144 % 2);
console.log(1286 % 2);
*/

// ভাগশেষ - ১ । ভাগ করার পর ভাগশেষ ১ হলে সেটা বিজোড় সংখ্যা হবে।
/*
console.log(7 % 2);
console.log(83 % 2);
console.log(145 % 2);
console.log(1287 % 2);
*/

function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
}
isEven(24);
isEven(29);
isEven(28);

function isEven2(number) {
    const remainder2 = number % 2;
    if (remainder2 === 0) {
        console.log('even number')
    } else {
        console.log('odd number')
    }
}
isEven2(9823);
isEven2(8739396);


function isEven3(number) {
    const remainder3 = number % 2;
    if (remainder3 === 0) {
        return true;
    } else {
        return false;
    }
}
var numberAdd = 235;
var convertNumber = isEven3(numberAdd);
console.log(convertNumber);