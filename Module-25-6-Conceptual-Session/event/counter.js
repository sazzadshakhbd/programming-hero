// 1. Event Listener Example
let count = 0;
document.getElementById('plus-btn').addEventListener('click', function () {
    count++;
    const numbersIncrement = document.getElementById('numbers')
    numbersIncrement.innerText = count;
})
document.getElementById('minus-btn').addEventListener('click', function () {
    count--;
    const numberDecrement = document.getElementById('numbers');
    numberDecrement.innerText = count;
})
// 1. Event Handeler
function myFunctionIncrement() {
    count++;
    const numbersIncrementPlace = document.getElementById('numbers')
    numbersIncrementPlace.innerText = count;
}
function myFunctionDecrement() {
    count--;
    const decrementNumbers = document.getElementById('numbers');
    decrementNumbers.innerText = count;
}