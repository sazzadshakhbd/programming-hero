function factorial(number) {
    let i = 1;
    let result = 1;
    while (i <= number) {
        result = result * i;
        i++
    }
    return result;
}
const total = factorial(7);
console.log(total)