function getInputField(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldTotalString = inputField.value;
    const inputFieldTotal = parseFloat(inputFieldTotalString);
    inputField.value = '';
    return inputFieldTotal;
}

function getInnerText(innerTextElement) {
    const textElement = document.getElementById(innerTextElement);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTotalElement(elementId, newValue) {
    const AllTextElement = document.getElementById(elementId);
    AllTextElement.innerText = newValue;
}