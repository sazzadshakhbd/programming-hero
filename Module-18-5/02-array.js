// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 

/*
    a) In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.

    b) JavaScript arrays are zero-indexed: the first element of an array is at index 0 , the second is at index 1 , and so on — and the last element is at the value of the array's length property minus 1.

*/

var fruitsName = ['apple', 'orange', 'lichi'];

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 

var fruitsName = ['apple', 'orange', 'lichi'];
console.log(fruitsName.length);


// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।

var numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]);
numbers[0] = 10;
console.log(numbers);

// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়

var carPrice = [12000, 20000, 30000];
var carPricePosition = carPrice.indexOf(212000);
console.log(carPricePosition);

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো

var a = [1, 2, 3];
var positionx = a.indexOf(1);
console.log(positionx);

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে

var b = [1, 2, 3];
var position = b.indexOf(3);
console.log(position);
b[2] = 12;
console.log(b);

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
var allNames = ['sazzad', 'sobuz', 'adib']
console.log(allNames.indexOf('adib'))

// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

var players = ['sakib', 'shanto', 'riyad']
var player = players[3];
console.log(player)

// এখানে undefined দেখানোর কারন হলো,আমরা players array এর ভিতর থেকে 5 নাম্বার ইনডেক্স কে খুতেছি।কিন্তু এরে এর ভিতর 0 থেকে 4 নাম্বার ইনডেক্স পযর্ন্ত আছে। যেহুতু 5 নাম্বার index নেই তাই undefined দেখিয়েছে।

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

var c = [1, 2, 3, 4, 5,]
c.push(6);
console.log(c);
c.pop();
console.log(c);

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

c.unshift(0);
console.log(c);
c.shift();
console.log(c);

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, 

var money = 100;
if (money > 200 || money >= 50 || money < 70 || money <= 40 || money == 100 || money === 100 || money != 50 && money !== 300) {
    console.log('buy t-shirt')
}
console.log(money);

// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var macPrice = 80000;
var laptopPrice = 60;
var lenovoPrice = 40000;
var oldLaptopPrice = 20000;

if (macPrice < 80000) {
    console.log('buy Mac');
} else if (laptopPrice < 50) {
    console.log('buy laptop');
} else if (lenovoPrice < 30000) {
    console.log('buy lenovo');
} else if (oldLaptopPrice < 20000) {
    console.log('buy old Laptop')
} else {
    console.log('used mobile')
}

