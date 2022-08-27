const numbers = [10, 23, 48, 29, 49, 483, 3094, 593, 2094, 483, 92];
const bignUmber = numbers.filter(x => x > 500);
const tiny = numbers.filter(a => a < 100);
const evenNumber = numbers.filter(z => z % 2 === 0);
// console.log(bignUmber);
// console.log(tiny);
// console.log(evenNumber);


const products = [
    { id: 1, name: 'laptop', price: 450000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
    { id: 1, name: 'pc', price: 45000 },
];
const productsName = products.filter(x => x.price > 50000);
console.log(productsName);