// How to addition total price on object?
const a = {
    name: "laptop",
    color: "black",
    price: 12000
};
const b = {
    name: "monitor",
    color: 'gray',
    price: 5000
};
const c = {
    name: "mouse",
    color: 'black',
    price: 1000
}
// console.log(a.price);
// console.log(b.price);
// console.log(c.price);

const totalPrice = a.price + b.price + c.price;
console.log(totalPrice);