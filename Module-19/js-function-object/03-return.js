function add(number1, number2) {
    // console.log(number1, number2);
    var sum = number1 + number2;
    return (sum);
}
var total = add(30, 20);
// console.log('Total: ', total);

function add2(num1, num2) {
    // console.log(num1, num2);
    var sum2 = num1 + num2;
    // console.log(sum2);
}
add2(15, 20);

function bringSangara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var singaras = bringSangara(myTaka);
// console.log('Eating Singara: ', singaras);