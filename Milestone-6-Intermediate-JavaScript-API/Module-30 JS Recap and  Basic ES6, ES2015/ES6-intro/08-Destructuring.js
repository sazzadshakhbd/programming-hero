const fish = {
    name: 'Hilsha',
    address: 'borishal',
    color: 'silver',
    phone: '018348748',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

const { age, name } = { name: 'Almas', age: "56", profession: 'makeup artist' }
// console.log(age);

const { address } = fish;
// console.log(address);

// Array Destructuring
const [first, second] = [15, 20, 30, 40, 50];

// console.log(first, second);

const nayoks = ['sakib', 'bappi', 'raj']
const [king, lost, news] = nayoks;
// console.log(news)

function getName() {
    return ['Alia', 'Halim'];
}
const [baba, chacha] = getName();
console.log(chacha, baba);