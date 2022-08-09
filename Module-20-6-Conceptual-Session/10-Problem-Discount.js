/*
    Problem-3:

    Write a function that takes input the total price of the products you bought are returns the net price calculated according to the display table below?

    >=1000[total price] ---- discount 10%
    >=3000[total price] ---- discount 15%
    >5000[total price] ---- discount 20%
*/

function discountCalc(totoalPrice) {
    if (totoalPrice > 5000) {
        const discountPrice = totoalPrice * (20 / 100);
        const netprice = totoalPrice - discountPrice;
        console.log(netprice);
    } else if (totoalPrice >= 3000) {
        const discountPrice = totoalPrice * (15 / 100);
        const netprice = totoalPrice - discountPrice;
        console.log(netprice);
    } else if (totoalPrice >= 1000) {
        const discountPrice = totoalPrice * (10 / 100);
        const netprice = totoalPrice - discountPrice;
        console.log(netprice);
    } else {
        console.log('No Discount')
    }
}
var result = discountCalc(1000);
console.log(result);


