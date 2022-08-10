/*
    Problem-9:

   Write a function that will take a number and will check the number is positive
or negative.


*/

function checkPositiveNegative(num) {
    if (num == 0) {
        return (num, 'Is zero');
    } else if (num > 0) {
        return (num, 'Is Posative');
    } else {
        return (num, 'is Negative');
    }
}
var result = checkPositiveNegative(0);
console.log(result);



