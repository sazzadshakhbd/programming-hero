const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 3);
const third = numbers.map(x => x * 3);
// console.log(half);
// console.log(third);

const friendsName = ['tamim', 'musfiq', 'siomaon', 'riad', 'tushar'];
const firstLetter = friendsName.map(f => f[0]);
const maxlength = friendsName.map(x => x.length);
// console.log(firstLetter);
// console.log(maxlength);

const products = [
    { id: 1, name: 'laptop', price: 450000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
    { id: 1, name: 'pc', price: 45000 },
];
const items = products.map(p => (p.name));
const prices = products.map(x => x.price);
console.log(items);
console.log(prices);