// ১-৭ পর্যন্ত সংখ্যা কিভাবে যোগ করব?

var sum = 0;
for (var i = 1; i <= 7; i++) {
    // console.log(i);
    sum = sum + i;
    // console.log(i, sum)
}

function sumOfNumber(number) {
    var sum = 0;
    for (var i = 1; i <= 7; i++) {
        sum = sum + i;
        console.log(sum)
    }
    return sum
}
sumOfNumber();