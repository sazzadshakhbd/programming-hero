/* 
    পুর্বে আমরা যা যা শিখেছিলাম তা হলঃ
    
*/

// 1. Variable
var myName = 'sazzad'

// 2. Math Operations: +, -, *, /

// 3. Shorthand: +=, -=, *=, =/, ++, --

// Array
var family = ['sazzad', 'sobuz', 'adib', 'adiba', 'marjia', 'maa']
// console.log(family);
var familyMember = family[5] // index
// console.log(familyMember);
family[2] = 'Baba';
// console.log(family);

// Conditional 

// 1. >, <, >=, <=, ==, ===, !=, !==
if (family.length > 10) {
    console.log('sakib')
} else {
    console.log('rahim')
}

// While Loop
var number = 0;
while (number <= 6) {
    // console.log(number);
    number++
}

// For loop
for (var i = 0; i <= 6; i++) {
    // console.log(i);
}

// Function

function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}
isMoonUp(6)

// Object

var jantus = {
    height: 60,
    romantic: true
}
console.log(jantus);

// const, let, var
let age = 11;
const countrryName = 'Bangladesh'
var pen = 25;



