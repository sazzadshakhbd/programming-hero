/*
    Problem-6:

    Write a function that will take an array and will return odd sum and even sum
*/

// [ 1, 2, 3, 4, 5, 6, 7]

function addEvenOdd(arr) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNumber = evenNumber + arr[i];
        } else {
            oddNumber = oddNumber + arr[i];
        }
    }
    console.log(evenNumber, oddNumber);
}
const arr = [1, 2, 3, 4, 5, 6, 7];
addEvenOdd(arr);