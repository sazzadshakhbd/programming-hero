// 1. Add the event handeler with the withdraw button
// 2. Get the withdraw amount from the withdraw input field
// 2.5 Also make sure to convert the input into a number by using parseFloat
// 3. Get previous withdraw total
// 4. Calculate total withdraw amount
// 4.5. Set total withdraw amount
// 5. Clear the input field
// 6. Get the previous balance
// 7. Calculate new balance total
// 7.5 Set the new balance total

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElelment = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElelment.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('allBalanceAmount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElelment.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})  