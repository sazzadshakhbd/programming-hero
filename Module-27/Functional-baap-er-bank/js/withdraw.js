document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputFieldWithdraw = getInputField('withdraw-field');
    const textElementWithdraw = getInnerText('withdraw-total');
    const totalWithdrawAmount = textElementWithdraw + inputFieldWithdraw;
    setTotalElement('withdraw-total', totalWithdrawAmount);
    const withdrawBalance = getInnerText('balance-total');
    const totalWithdrawbalance = withdrawBalance - inputFieldWithdraw;
    setTotalElement('balance-total', totalWithdrawbalance);

})