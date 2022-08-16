// Add event Listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: Get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    // Step-3: Get the current deposit total
    // for non input [element other than input, textarea] use innertext to get the text
    const depositTotalElement = document.getElementById('totalDeposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // Step-4: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get current balance total
    const balanceTotalElement = document.getElementById('allBalanceAmount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})