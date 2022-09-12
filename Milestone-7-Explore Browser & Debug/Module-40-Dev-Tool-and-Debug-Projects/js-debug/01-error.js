// 1. Syntax Error

/* 
consolelog(5;

function add+() {

}

Let x = 10
cont y = 12; */


// 2 Type Error

let address;
console.log(typeof address);
// console.log(address.length)

const people = 5;
// people();


// 3. Reference Error
function add(a, b) {
    const result = (a + b);
    return result
}
// console.log(result);

if (true) {
    // console.log(time)
    const time = 10
}

const persons = {
    names: 'sazzad'
}
console.log(persons);
// persons.map(a => console.log(a));