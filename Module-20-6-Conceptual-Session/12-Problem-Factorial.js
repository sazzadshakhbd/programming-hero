/*
    Problem-5:

    Write a function that will take a integer as a input and will return the factorial number for this input (Using for and while loop)
*/

function factorial(n) {
    let result = 1;
    let i = n
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
console.log(factorial(5));