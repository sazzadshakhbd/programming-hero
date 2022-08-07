/*
    Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

    এই practice -এ  কোন একটা array - এর মধ্যে যতগুলো উপাদান আছে সেই উপাদান গুলোর sum / সমস্টি / যোগফল আমরা বের করার চেষ্টা করেছি।
*/

function getSumOfArray(numbers) {
    // console.log(numbers);
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    }
    return sum;
}


// এবার আমরা array -এর মধ্যে যে সকল বিজোড় সংখ্যা আছে তা বের করব

function getOddNumbersOfArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push[element];
        }
    }
    return oddNumbers;
}


const myNumbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumbersOfArray(myNumbers);
console.log(oddNumbers);
getSumOfArray(myNumbers);