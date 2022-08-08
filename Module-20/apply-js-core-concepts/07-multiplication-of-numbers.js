// ১-৭ পর্যন্ত সংখ্যা কিভাবে গুন করব?
function multiplication(number) {
    var multiply = 1;
    for (var i = 1; i <= number; i++) {
        multiply = multiply * i;
        // console.log(multiply);
    }
    return multiply;
}
var result = multiplication(7);
console.log(result);