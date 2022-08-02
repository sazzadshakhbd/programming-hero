var mathMarks = 75.25;
var biologyMarks = 65;
var chemestryMarks = 80;
var physicsMarks = 35.45;
var banglamarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemestryMarks + physicsMarks + banglamarks;
console.log(totalMarks);

var averageMarks = totalMarks / 5;
console.log(averageMarks);

var averageDecimalmarks = averageMarks.toFixed(2);
console.log(averageDecimalmarks)

var convertNumber = parseFloat(averageDecimalmarks);
console.log(convertNumber);