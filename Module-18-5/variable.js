// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো? / What is Javascript?

/*
JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.
It has dynamic typing, prototype-based object-orientation, and first-class functions.
It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.
It has application programming interfaces (APIs) for working with text, dates, regular expressions,
standard data structures, and the Document Object Model (DOM)
*/

// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো? / How does javascript work ?

/*
    The web browser loads a web page, parses the HTML, and creates what is known as a Document Object Model (DOM) from the contents.
    The DOM presents a live view of the web page to your JavaScript code.The browser will then grab everything linked to the HTML,
    like images and CSS files.
*/

// ৩. ভেরিয়েবল কি জিনিস? / What is variable?

/*
    Variables are containers for storing data (storing data values).
*/

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে ? / How to decleare a variable?

var x = 2;

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। How to change or update the value of a variable?

var names = 'sazzad';
names = 'sobuz';

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean) / How many types of variable-types? How can you find out type of a variable?

var strings = 'sazzad'
console.log(typeof strings);

var numbers = 10;
console.log(typeof numbers);


var booleans = true;
console.log(typeof booleans);

var undefineds;
console.log(typeof undefineds);

var nulls = null;
console.log(typeof nulls);

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
/*
    Primitive Data Types − This is the predefined data type that is provided by JavaScript for different usages. These are also known as the in-built data types. 
    Number, string, undefined, boolean & null.

    Non-Primitive Data Types − These data types are derived from the primitive data types and work as a reference. Therefore, they are also known as reference data types. 
    Object, Array
*/
var x = 12 // Number - primitive data types
var y = 12.5 // Number - primitive data types
var names = 'sazzad' // String - primitive data types
var z = undefined // Undefined - primitive data types
var a = false // Boolean - primitive data types
var b = null //Null - primitive data types

// Object - Non - primitive data types
var objects = {
    firstName: 'sazzad',
    lastName: 'shakh'
}
// Array - Non - primitive data types
var fruits = ['apple', 'grape', 'banana', 'lichi']


// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। / Naming convension of javascript variable?

/*
    a) var names = 10;
    b) Variable name can not be any keywords
        var false = 96 // Wrong
        var return = true // wrong
    c) Variable name has to be in one word. No space.
       var my home address = 'dhaka' // wrong
    d) Variable name can not have qotation
       var "name" = 'sazzad' // wrong
    e) Variable name can not starts with a number but can ends with a number
       var 99club = 1964 // wrong
       var club99 = 1956 // Right
    f) use long names & can not use dash
       var user-name = 'sazzad' // wrong
       var user_name = 'sazzad' // right - snakecase
       var userName = 'sazzad' // camelcase
       var Username = 'sazzad' // pascal case
    g) Keyword is case-sensetive
       vaR sazzad // wrong
    h) Variable name is case sensetive
       var xyz = 'apple';
       var XYZ = 'apple';
*/

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? / Math operation +, -, *, /, %

var x = 10;
var y = 20;
var z = x + y;
var z = x - y;
var z = x * y;
var z = x / y;
var z = x % y;

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। / Shorthand

var x = 10;
x += 10; // 20

var y = 10
y -= 5 // 5

var a = 10;
a *= 5 // 50

var b = 30;
b /= 6; // 5
console.log(b);


// ১১. ++ এবং -- এর কাজ কি ? এইটা কি জানো।

var x = 10;
x++;
console.log(x);

var y = 10;
y--;
console.log(y);


// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 

var numbers = '120';
numbers = parseInt('120');
console.log(numbers);

var allNumbers = '100.45';
allNumbers = parseFloat(allNumbers);
console.log(allNumbers);


var carPrice = 12000.666;
carPrice = carPrice.toFixed(1);
console.log(carPrice);