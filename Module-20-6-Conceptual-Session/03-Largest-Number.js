// How to find largest with array number using return/ no return function?

function findLargetNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3)
    }
}
findLargetNumber(2, 3, 1);
findLargetNumber(5, 8, 1);
findLargetNumber(5, 8, 10);

function findLargetNumber2(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
var result = findLargetNumber2(4, 67, 23);
var result = findLargetNumber2(400, 67, 23);
var result = findLargetNumber2(4, 67, 230);
console.log(result);