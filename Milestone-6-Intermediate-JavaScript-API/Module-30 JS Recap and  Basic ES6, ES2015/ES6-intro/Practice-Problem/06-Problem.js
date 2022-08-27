/*
    Write an arrow function where it will do the following:

    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the
    result
*/

const firstNumSet = [12, 43, 54, 67, 89];
const secondNumSet = [121, 3, 4, 17, 915];

const max = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    return Math.max(...newArray);
}
console.log(max(firstNumSet, secondNumSet));