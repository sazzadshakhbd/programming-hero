// 1. Add Event Listener to the Deposit Button
// 2. Get Deposit Amount Fron the Deposit Input Field
// 2-5 Convert String Deposit Amount to a Number Type
// 3. Clear the Deposit Input Field After Getting the Value
// 4. Get the Previous Deposit Total
// 5. Calculate New Deposit Total and Set the Value to the Deposit Total
// 6. Get Current Balance Total
// 7. Calculate the new balance and set it to the balance total amount


document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step-3   
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Plase provide a valid number');
        return;
    }
    // Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step-5
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = newDepositTotal;
    // Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // Step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})