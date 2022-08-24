// Const not resassign
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers[1] = 12;
numbers.pop();
numbers.shift();
numbers.unshift(1);
// console.log(numbers);

const student = {
    name: 'sazzad',
    age: 40
}
student.name = 'sobuz';
student.age = 39;
// console.log(student.age);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    sum = sum + numbers;
    console.log(num);
}