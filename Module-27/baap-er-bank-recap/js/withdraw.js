document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }
    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceElement = document.getElementById('balance-total');
    const prevoiousBalanceTotalString = balanceElement.innerText;
    const prevoiousBalanceTotal = parseFloat(prevoiousBalanceTotalString);


    if (prevoiousBalanceTotal < newWithdrawAmount) {
        alert('Besi amount dicis ke? taka nai');
        return
    }

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;


    const newBalanceTotal = prevoiousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;




})