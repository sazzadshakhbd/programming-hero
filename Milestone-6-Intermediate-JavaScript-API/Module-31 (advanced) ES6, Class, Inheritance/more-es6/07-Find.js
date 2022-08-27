const numbers = [10, 23, 48, 29, 49, 483, 3094, 593, 2094, 483, 92];
const fives = numbers.find(x => x % 2 === 0);
const fiveAll = numbers.filter(y => y % 2 === 0);
// console.log(fives);
// console.log(fiveAll);

const products = [
    { id: 1, name: 'laptop', price: 450000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
    { id: 1, name: 'pc', price: 45000 },
];
const producName = products.find(a => a.price > 40000);
const productName = products.filter(b => b.price > 40000);
console.log(producName);
console.log(productName);