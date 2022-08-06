/*
গত চার দিনে আমরা variable, condition, array & loop এই চারটি জিনিস শিখেছি ।

Reacap of previous modules...


    a) What is Javascript? 
        - A scripting language that allows to implement comples features on web pages.
        - It can also be said as a programming language for the web.

    b) What is variable in javascript?
        - variable name = age
        - value = 72
        - location = in memory 
        - number = 12873
        - store = in boxes
    
    c) What is the Differnece between var, let & const?
        - Suppose you loves reading a lot. 
        - 'Melven Gray' is your favourite writer.
        - You want to buy all of his books.
        - 'X' publisher has published his 'Y' books.   

    d)  What is Data Type in JS?
        1. Primitive Data Types
            - Numbers
            - Strings
            - Boolean
            - Null & Undefined [Also known as a Trival / Other data types]
        2. Composite / Non-Primitive Data Types
            - Object
            - Arrays
    
    e) What is variable naming convention ?
        - Names can contain lettes, digits, underscores & dollar signs.
        - Names must begin with a letter.
        - The identifier names can also begin with $ sign.
        - Names are case-sensetive. Thus Y & y are differert variables.
        - Reserved words can not be as name.

    f) Keywords / Reserved words

*/


/* *******************************
g) Mathmetical Operation: 
**********************************/


var a = 20;
var b = 10;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a + 1;
var i = a += 1;
b++;
// console.log(b);


/* *******************************
h) Array in Index Javascript:
**********************************/



var salad = ['tomato', 'sosha', 'carrot'];
// console.log(salad);
// console.log(salad[0]);
// console.log(salad[1]);
// console.log(salad[2])

/* 
    Elelment at index 0 is 'tomato'
    Elelment at index 1 is 'sosha'
    Elelment at index 2 is 'carrot'
*/


/* *******************************
i) Push, Pop, Shift & Unshift
**********************************/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9); // Add number of last element
numbers.pop(); // Remove number of last element
numbers.shift(); // Remove number of First element
numbers.unshift(0); // AA number of First element
// console.log(numbers);



/* *******************************
j) Find index position
**********************************/
const color = ['White', 'Black', 'Teal'];
let position = color.indexOf('Teal');
// console.log(position);



/* *******************************
k) Slice
**********************************/
var fruits = ['apple', 'mango', 'guava', 'jackfruit', 'banana', 'lichi'];
var slicing = fruits.slice(2, 4);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var sliceNumber = numbers.slice(2, 6);
// console.log(sliceNumber);


/* *******************************
l) Includes:
**********************************/
var fullName = 'Md. Sazzad Ali Shakh';
var fullNameIncludes = fullName.includes('md');
var fullNameIncludes = fullName.includes('Md');
// console.log(fullNameIncludes);

/* *******************************
m) Substring
**********************************/
var player = 'Md. Sazzad Ali Shakh'
var playerName = player.substring(0, 3);
// console.log(playerName);


// নোটসঃ Array is immutable - পরিবর্তন হতে পারে না।


/* *******************************
n) ParseInt, ParseFloat
**********************************/

var price1 = 100;
var price2 = '200';
var total = price1 + price2;
// console.log(total); 

price3 = parseInt(price2);
// console.log(price3);

total = price1 + price3;
//console.log(total)

var penPrice = 10;
var khataPrice = '10.20';
var totalPrice = penPrice + khataPrice;
// console.log(totalPrice);

var convertFloat = parseFloat(khataPrice);
// console.log(convertFloat);

var convertInt = parseInt(convertFloat);
// console.log(convertInt);

totalPrice = penPrice + convertInt;
//console.log(totalPrice);

/* *******************************
o) typeof, tofixed
**********************************/

var nameString = 'sazzad';
// console.log(typeof nameString);

var numberDivided = 0.10 / 3;
// console.log(numberDivided);

var resultTofixed = numberDivided.toFixed(1);
// console.log(resultTofixed);

var result = parseFloat(resultTofixed);
// console.log(result);

/* *******************************
p) Array length
**********************************/

var lengthDetails = [1, 2, 3, 4, 5]
// console.log(lengthDetails.length);

if (lengthDetails.length > 9) {
    // console.log('yes')
} else if (lengthDetails[0] == 1) {
    // console.log('yes yes')
} else {
    // console.log('nothing')
}

/* *******************************
q) Condition
**********************************/

// Multistage Condition
var myBudget = 400;

if (myBudget < 250) {
    // console.log('Buy t-shirt from sopno super market')
} else if (myBudget > 300) {
    // console.log('Buy t-shirt from shopping mall')
} else {
    // console.log('Back to home')
}

// Basic Condition
var iphonePrice = 30000;
var myMoney = 70000;
if (iphonePrice > myMoney) {
    // console.log('buy mobilePhone')
} else {
    // console.log('buy iphone')
}

// Multiple Condition
var isGraduate = true;
var salary = 30000;
var car = 0;

if (isGraduate == true && salary >= 30000 || car >= 0) {
    // console.log('biye korba')
} else {
    // console.log('pore biye korba')
}

// Nested Condition
var math = true;
var geom = true;
var bio = false;
if (math == true) {
    if (geom == true) {
        if (bio == true) {
            // .log('Biology')
        } else {
            // console.log('no biology')
        }
    } else {
        // console.log('no geomatry')
    }
} else {
    // console.log('no Math');
}

/* 
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.

*/
var myNumber = 85;
var tomNumber = 66;
var janNumber = 95;
var peterNumber = 56;
var johnNumber = 40;

var fullNumber = 66;

if (fullNumber > 80 && fullNumber <= 100) {
    console.log('A grade');
} else if (fullNumber > 60 && fullNumber <= 80) {
    console.log("B Grade");
} else if (fullNumber > 50 && fullNumber <= 60) {
    console.log('C grade');
} else if (fullNumber > 39 && fullNumber <= 50) {
    console.log("D grade");
} else if ((fullNumber <= 39 && fullNumber > 0)) {
    console.log('F grade');
}

/* 
    You are given three numbers 13, 79, and 45. Write a program that will print the
    largest number using if-else.
*/
var a = 13;
var b = 79;
var c = 45;

if (a > b) {
    if (a > c) {
        // console.log(a)
    } else {
        // console.log(c)
    }
} else {
    if (b > c) {
        // console.log(b)
    } else {
        // console.log(c)
    }
}

/*
    You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
*/
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    // console.log('Isosceles')
}


/* *******************************
r) Loop
**********************************/

// While loop
var marbel = 0;
while (marbel < 7) {
    // marbel = marbel + 1;
    // marbel += 1;
    marbel++;
    // console.log(marbel);
}

// Display 1-20, even, odd
var disPlayNumber = 0;
while (disPlayNumber <= 20) {
    // console.log(disPlayNumber);
    disPlayNumber += 2;
}

// For Loop

for (var i = 0; i <= 20; i += 2) {
    // console.log(i)
}

// Array Lopp [Display every element of an array]
var fruits = ['apple', 'orange', 'lichi', 'banana', 'guava']
for (var i = 0; i < fruits.length; i++) {
    // console.log(i);
    var fruit = fruits[i];
    // console.log(fruit);
}

// break & continue
var numbers = [45, 87, 89, 56, 32, 51, 25, 39, 99, 105];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 51) {
        continue
    }
    // console.log(number);
}

for (var i = 0; i < fruits.length; i++) {
    // console.log(i);
    if (i > 2) {
        continue
    }
    //console.log(i);
}

// Reverse 

for (var i = 10; i >= 1; i--) {
    console.log(i);
}



