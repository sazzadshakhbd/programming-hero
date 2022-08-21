function generate4DigitPin() {
    const previousRandomNumber = generatePin();
    const numberConvertString = previousRandomNumber + '';
    if (numberConvertString.length === 4) {
        return previousRandomNumber;
    } else {
        // console.log('3 digit pin', previousRandomNumber);
        return generate4DigitPin();
    }
}
function generatePin() {
    const randomPinNumber = Math.round(Math.random() * 10000);
    return randomPinNumber;
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = generate4DigitPin();
    const inputField = document.getElementById('input-field');
    inputField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        } else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    } else {

        const newTypeNumber = previousTypedNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('input-field');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFalure = document.getElementById('pin-faluire');

    if (typeNumber === currentPin) {

        pinSuccessMessage.style.display = 'block';
        pinFalure.style.display = 'none';

    } else {

        pinFalure.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})



const product = 5;
const price = "7";
const subTotal = product * price;
const tax = subTotal / 10;
const total = subTotal + tax;
console.log(total)

const category = "pen";
const performer = category + "-teller";
console.log(performer);