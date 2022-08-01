var numbers = [45, 68, 78, 56, 89, 98];

// Get element value by index

console.log(numbers[3]);
var element = numbers[1];
console.log(element)

// Set element value by index
numbers[0] = 50;
console.log(numbers)

numbers[3] = 98;
console.log(numbers);

// Find index of an element
var positionIndex = numbers.indexOf(68);
console.log(positionIndex);

var position = numbers.indexOf(189);
console.log(position);