// Noraml Function

// function add(first, second) {
//     console.log(first, second);
//     const total = first + second;
//     return total;
// }
// console.log(add(10, 20));
// console.log(add(10));
// console.log(add(10));


// ES6 Pattern Set Default Parameter
function add(first = 0, second = 30) {
    const total = first + second;
    return total
};
// const result = add(10, 20);
const result = add(10, 10);
// console.log(result);

function fullName(first, last = 'Shakh') {
    const fullName = first + ' ' + last;
    return fullName;
}

const names = fullName('Sobuz');
// console.log(names);


function add1(num1 = 0, num2 = 0) {

    let result = 0;

    result = num1 + num2;

    console.log(result);

}
add1(10);



// Notes:
// 1. Default Parameter হতে পারে string, number, object etc
// 2. যদি parametre এ value সেট করা থাকে তাহলে সে  default parametre নিবে না আর যদি সেট না করা থাকে তাহলে সে  default parametre কেই নিবে।