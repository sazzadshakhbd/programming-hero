function sum(a, b, c) {
    const result = a + b + c;
    // console.log(arguments[4]);
    // console.log(typeof arguments[4]);

    const args = [...arguments];
    console.log(args)
    return result;
}
const total = sum(10, 20, 30, 40, 50);
// console.log(arguments);
// console.log(total);
// console.log(typeof sum)
console.log(sum.length)