
const products = [
    { name: 'lpatop', price: 32000, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]

// 1. Map Method [return array]
const allBrand = products.map(product => product.brand);
console.log(allBrand);
const allPrices = products.map(product => product.price);
console.log(allPrices);

// 2. ForEach Method [no return]
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. Filter Method [return something]
const filterPrice = products.filter(product => product.price <= 5000);
console.log(filterPrice);

const findName = products.filter(product => product.name.includes('a'))
console.log(findName);

// 4. Find Method [return only first thing]
const findN = products.find(product => product.name.includes('n'));
console.log(findN);
