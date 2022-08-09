// এখানে আমরা যে কোন জোড় সংখ্যাকে মডুলাস দিয়ে করলে এর ভাগশেষ ০ হবে।
/*
console.log(6 % 2);
console.log(68 % 2);
console.log(8 % 2);
console.log(110 % 2);
console.log(46880 % 2);
*/

// How to check even or odd number has no return using function?

function findEvenOddNumber(num) {
    if (num % 2 === 0) {
        console.log('It is a even numberIt is a even number');
    } else {
        console.log('It is a odd number');
    }
}
findEvenOddNumber(59);
findEvenOddNumber(12);

// How to check even or odd number with return using function?

function findEvenOddNumber2(num) {
    if (num % 2 == 0) {
        return 'It is a even number';
    } else {
        return 'It is a odd number';
    }
}
var result = findEvenOddNumber2(43);
console.log(result);