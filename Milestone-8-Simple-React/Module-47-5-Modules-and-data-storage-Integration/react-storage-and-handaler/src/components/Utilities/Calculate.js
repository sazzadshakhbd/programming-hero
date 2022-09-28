const add = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second
}

// const numbers = [20, 24, 237, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)

// const items = [
//     { id: 1, name: 'Tiger', price: 500 },
//     { id: 2, name: 'Cat', price: 400 },
//     { id: 3, name: 'Dog', price: 300 },
//     { id: 4, name: 'Cow', price: 200 },
//     { id: 5, name: 'Goat', price: 100 },
// ]
// const itemReducer = (previous, current) => previous + current.price
// const itemTotal = items.reduce(itemReducer, 0)


const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default add
export { add, multiply, getTotalPrice as getTotal };