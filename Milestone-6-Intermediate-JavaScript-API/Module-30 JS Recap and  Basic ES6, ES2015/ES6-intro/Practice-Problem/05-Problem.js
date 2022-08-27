/*
    Write an arrow function where it will do the following:

    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

    Print the result.
*/

const numbers = [2, 4, 6, 8, 12];

const squareAverageCalculator = (numbers) => {
    let sumOfSquareNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfSquareNumbers += numbers[i] * numbers[i];
    }
    return (sumOfSquareNumbers / numbers.length).toFixed(2);
};
console.log(squareAverageCalculator(numbers));