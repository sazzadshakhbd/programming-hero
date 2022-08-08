// function factorial(number) {
//     let result = 1;
//     for (var i = number; i >= 1; i--) {
//         result = result * i;
//         //console.log(result);
//     }
//     return result;
// }
// const factorialNumber = 8
// const totalResult = factorial(factorialNumber);
// console.log(totalResult, factorialNumber);

function factorial(number) {
    let result = 1
    for (var i = number; i >= 1; i--) {
        result = result * i
    }
    return result;
}
var factorialNumber = 5;
var totalResult = factorial(factorialNumber);
console.log(totalResult, factorialNumber);