// 1. JSON => Stringify, Parse
const student = {
    name: 'sazzad',
    age: 40,
    married: true,
    learning: ['html', 'css', 'javascript']
}
const jsonStringyfy = JSON.stringify(student);
// console.log(student);
// console.log(jsonStringyfy);
const jsonParse = JSON.parse(jsonStringyfy);
// console.log(jsonParse);



// 2. Fetch
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))



// 3. Keys, Values
const adiba = Object.keys(student);
const sazzad = Object.values(student);
// console.log(sazzad);



// 4. For
const numbers = [10, 20, 30, 40, 50]
// numbers.forEach(num => console.log(num));
// numbers.map(num => console.log(num * 2));


// 5. [For of] on array like object using queryselector, queryselectorall, classname etc


// 6. [For in] using loop on an object


// 7. Add or Remove from an Array
const products = [
    { name: 'lpatop', price: 32000, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]
const newProduct = { name: 'webcame', price: 700, brand: 'lal', color: 'green' }
// Copy previous products array and then add newproduct
const allProducts = [...products, newProduct]
// console.log(allProducts);

// Create a new Array without one specific item
const remaining = products.filter(product => product.name !== 'phone')
console.log(remaining);

