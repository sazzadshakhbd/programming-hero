
document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputFieldContainer = getInputField('deposit-field');
    const textElementForAll = getInnerText('deposit-total');
    const deposit = textElementForAll + inputFieldContainer;
    setTotalElement('deposit-total', deposit);
    const totalDeposit = getInnerText('balance-total');
    const addTotalDeposit = inputFieldContainer + totalDeposit;
    setTotalElement('balance-total', addTotalDeposit);
});