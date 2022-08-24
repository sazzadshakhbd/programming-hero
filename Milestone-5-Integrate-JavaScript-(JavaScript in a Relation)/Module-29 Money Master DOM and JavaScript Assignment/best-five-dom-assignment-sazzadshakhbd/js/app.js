let playerNameArray = [];
// Player List Add
function displayPlayerName(players) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const specificName = players[i].name;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${specificName}</span>
        `
        playerList.appendChild(li);
    }
}

// Display Player Name Onclick
function selectPlayers(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerNameObject = {
        name: playerName
    }
    playerNameArray.push(playerNameObject);
    displayPlayerName(playerNameArray);
}

// Input Field Function
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// Inner Text Function
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// Set Total Function
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// Calculate Function
document.getElementById('calculate-expense-btn').addEventListener('click', function () {

    const playerFieldAmount = getInputFieldValueById('per-player-filed')

    const playerExpense = getTextElementValueById('per-player-expense')

    const sumPerPlayerTotal = playerExpense + playerFieldAmount;

    setTextElementValueById('per-player-expense', sumPerPlayerTotal)

})

//Calculate Total Functions 
document.getElementById('total-calculate-btn').addEventListener('click', function () {
    const playerExpense = getTextElementValueById('per-player-expense')

    const managerAmount = getInputFieldValueById('manager-amount-field')

    const coachAmount = getInputFieldValueById('coach-amount-field')

    const total = getTextElementValueById('total-amount')

    const sumTotalAmount = total + managerAmount + coachAmount + playerExpense;

    setTextElementValueById('total-amount', sumTotalAmount)
})
