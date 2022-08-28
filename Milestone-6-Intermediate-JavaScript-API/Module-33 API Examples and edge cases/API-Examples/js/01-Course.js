
function loadQuote() {
    const url = 'https://api.kanye.rest/'
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
displayData = quote => {
    const bloqQuote = document.getElementById('quote');
    bloqQuote.innerText = quote.quote;
}
loadQuote();