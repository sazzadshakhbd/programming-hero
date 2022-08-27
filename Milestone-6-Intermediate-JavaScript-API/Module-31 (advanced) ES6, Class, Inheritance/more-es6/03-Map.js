const numbers = [2, 4, 6, 8,];
const output = []
for (number of numbers) {
    const multiply = number * 2;
    output.push(multiply);
}
// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (number of numbers) {
        const multiply = number * 2;
        output.push(multiply);

    }
    return output;
}
// Map
const students = [2, 4, 6, 8, 12];
const doubleIt = (students) => students * 2;
const mapping = students.map(doubleIt);

const result = getDoubles(numbers);
const makeDoubleDirect = students.map((students) => students * 2);
const makeDouble2 = students.map(x => x * 2);
// console.log(result);
// console.log(mapping);
// console.log(makeDoubleDirect)
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(makeDouble2);
console.log(fiveTimes);
