// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
for (var i = 0; i < 40; i++) {
    //console.log('ajke amr mon valo nei');
}

// ২৬. while লুপ কিভাবে কাজ করে

var myName = 0;
while (myName <= 7) {
    myName++;
    // console.log('sazzad');
}


// ২৭. for লুপ কিভাবে কাজ করে

for (var i = 0; i <= 7; i++) {
    // console.log(i);
}

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।

// Infinite vabe cholte thake loop

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
for (var i = 58; i <= 98; i++) {
    // console.log(i);
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
for (i = 412; i <= 456; i += 2) {
    // console.log(i)
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
for (i = 581; i <= 623; i += 2) {
    //  console.log(i)
}
// ৩২.while আর for loop এর মধ্যে পার্থক্য কি

/*
    while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.

    for — loops through a block of code until the counter reaches a specified number.
    for…in — loops through the properties of an object.
*/

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var mySubjects = ['html5', 'css3', 'git', 'vscode', 'bootstrap', 'tailwind']
for (var i = 0; i < mySubjects.length; i++) {
    var mySubject = mySubjects[i];
    // console.log(mySubject);
}

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে 

var mobiles = ['alcatel', 'symphony', 'sumsung', 'realme'];
var x = 0;
while (x < mobiles.length) {
    var mobile = mobiles[x];
    // console.log(mobile);
    x++;
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break
    }
    // console.log(i)
}

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var booksPrice = [130, 89, 48, 340, 480, 99];
for (var i = 0; i < booksPrice.length; i++) {
    var price = booksPrice[i];
    if (price >= 200) {
        continue
    }
    console.log(price);
}