/* 
    1. What is variable?
        - ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে
        - ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায়
    2.  ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন
         1. Letter(A-z)
         2. Number {0-9}
         3. UnderScore (_)
         4. Doller ($)
    3.  ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন না
        1. কি  ওয়ার্ড  ব্যবহার  করা  যাবে  না
        2. নম্বর  শুরুতেই  ব্যবহার  করা  যাবে  না
        3. স্পেস  দেওয়া  যাবে  না
        4. কেস  সেনসিটিভ  হওয়ায়  সেইম  টু  সেইম  হতে  হবে
    4. Key Words
        - জাভাস্ক্রিপ্ট  আপনার  জন্য  কিছু  জিনিস  (ফাঙ্কশন ) অলরেডি  তৈরী  করে  রাখছে  এইগুলাই  রিজার্ভ ওয়ার্ড  অথবা  কি  ওয়ার্ড
        - এই  গুলা মুখুস্থ  করার   কোনো  জিনিস  না  তাই  চিন্তা   করার  দরকার  নাই  আস্তে  আস্তে  সব  এমনেই মনের  মধ্যে  বসে  যাবে  ব্যাবহার  করতে  করতে
    5. DAta Types
        - আমরা  মূলত  এখানে  স্ট্রিং  এবং  নম্বর  এবং  বুলিয়েন  ডাটা  টাইপ   আলোচনা  করবো




*/
// CamelCase
var firstName = 74;

// keywords
if (true) {
    console.log("yesssssss");
}
// 1. string
var name1 = "hero Alom";
console.log(typeof name1);

// number data types
var roll = 71;
console.log(typeof roll);

// boolean data types
var statement = true;
console.log(typeof statement);

// *parseFloat parseInt
var num1 = 70.78;
var num2 = 70;
var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));

// ## If else statement
if (4 < 5) {
    console.log('4 is bigger than 5');
} else {
    console.log('5 is bigger than 4');
}

// 2nd examaple with condition
var number = 50;
if (number % 2 == 0) {
    console.log('even number')
} else if (number % 2 == 1) {
    console.log('odd number')
} else {
    console.log('dont know')
}

// nested condition
var number2 = 30;
if (number2 > 20) {
    if (typeof number2 == 'number') {
        console.log('number')
    } else if (typeof number2 == 'string') {
        console.log('string')
    } else {
        console.log('boleen');
    }
} else {
    console.log('number 2 is very small number please try  bigger then 20');
}

// Grade countunting

var result = 56;
if (result > 0) {
    if (result < 33) {
        console.log('wow  tumi fail korco !! Now  Breakup dont call me again');
    } else if (result >= 33 && result < 40) {
        console.log('You just passed this exam (kono moto)');
    } else if (result >= 40 && result < 50) {
        console.log('your grade is D');
    } else if (result >= 50 && result < 60) {
        console.log('your grade is C');
    } else if (result >= 60 && result < 70) {
        console.log('your grade is B');
    } else if (result >= 70 && result < 80) {
        console.log('your grade is A-');
    } else if (result >= 80 && result < 90) {
        console.log('your grade is A+');
    } else if (result > 90 && result <= 100) {
        console.log('your grade is  excillent')
    } else {
        console.log('cant not found please try again yoru grade range is 0-100');
    }
} else {
    console.log('please try with positive number')
}


// switch
// switch, case,break,default,

// ** Switch statement  with condition
var name = "hero";

switch (name) {
    case "rahim":
        console.log("wow its rahim");
        break;
    case "abdul":
        console.log("tumi rahim na abdul");
        break;
    case "hero":
        console.log("wow tumi hero");
        break;
    default:
        console.log("dont know");
        break;
}

/* 

// data structure
// Array

// ** অ্যারের প্রতিটি মানকে এলিমেন্ট বলে অর্থ্যাৎ উপরের box অ্যারেতে 5 টি এলিমেন্ট আছে। প্রত্যেকটি এলিমেন্ট যেকোন কিছু হতে পারে, একটা স্ট্রিং কিংবা একটা পূর্নসংখ্যা এমনকি একটা অবজেক্ট।

// ** প্রথম মানের জন্য ০ শূন্য দিয়ে শুরু করে এভাবে ক্রমানুসারে পরেরগুলির জন্য জাভাস্ক্রিপ্ট index নাম্বার দেয়। একসেস নেয়ার সময় প্রথমে ভেরিয়েবলের নাম এরপর তৃতীয় বন্ধনীর (square bracket []) এর ভিতর index নাম্বারটি। যেমন ২য় মানটি একসেস করতে চাইলে box[1] এভাবে।

// ** অ্যারে বানাতে হয় প্রথম উদাহরনের মত, তৃতীয় বন্ধনীর ভিতর single বা double কোটেশনের ভিতর মান দিতে হয় এবং প্রতিটি মান কমা (,) দিয়ে আলাদা রাখতে হবে। এভাবে অ্যারে তৈরীর প্রক্রিয়ার টেকনিকাল নাম হচ্ছে "অ্যারে লিটারেল"।

// এছাড়া new কিওয়ার্ড Array() ফাংশন (এটার নাম আসলে কনস্ট্রাক্টর) ব্যবহার করে অ্যারে বানানো যায় যেমন উপরের অ্যারেটি চাইলে নিচের মত করে তৈরী করতে পারেন।

*/
var box = ["heroalom", 10, "bangladesh", "dhaka", 71];
var box2 = new Array("HTML", "CSS", "JavaScript", "PHP")
// console.log(box);
// console.log(box2);


// Useful array methods
let stuff = ["A", "B", "C", "D", "E", "F"];

stuff.pop(); // removes the last item in the array (returns what was removed)
// console.log(stuff);

stuff.shift(); // removes the first item in the array (returns what was removed)
// console.log(stuff);

stuff.push('G'); // adds an item to the end of the array (returns the new length of the array)
// console.log(stuff);

stuff.unshift('Z'); // adds an item to the beginning of the array (returns the new length of the array)
//console.log(stuff);

stuff.indexOf("C"); // returns the index number of the item in the array
// console.log(stuff);

stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
// console.log(stuff);

stuff.splice(2, 0, 'hello') // second argument determines how many items are removed in total (including index) (returns what was removed)
// console.log(stuff);

stuff.concat(["N", "L", "T"]); // returns the combination of array "stuff" with the array argument
// console.log(stuff);

stuff.toString() // returns the combination of elements of the array into a string
console.log(stuff);

stuff.join(); // works the same as toString() but the argument determines what is between each element in the string
console.log(stuff);

stuff.reverse(); // reverses an array's elements (returns same thing)
console.log(stuff);

// This is the structure for array loop
/*
for (1 = 0; index < array.length; index++) {
    const element = array[index];
}
*/


// While loop
var i = 0;
while (i < 10) {
    // console.log(i);
    i++;
}


var friends = ["rahim", "adin", "jamila", "komolaaaa"];
var temp = friends[0];

for (var i = 0; i < friends.length; i++) {

    var element = friends[i];
    if (element.length > temp.length) {
        temp = element;
    }
}

console.log(temp);