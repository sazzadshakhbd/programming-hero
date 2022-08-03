var waterBottle = 'water' //String type variable
var bottleColor = 'yellow' //String type variable
var sunglassPrice = 120 //Number type variable
var penColor = 'blue' //String type variable
var isExpensive = true //Bollean type variable

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];
var item3 = tableItems[3];
tableItems[4] = 'notebook';
console.log(tableItems);
var penIndex = tableItems.indexOf('pen');
console.log(penIndex)

// Conditionals

// Push, Pop

if (tableItems.length > 4) {
    console.log('yes');
} else if (tableItems[3] == 'pen') {
    console.log('yes yes')
} else {
    console.log('no')
}