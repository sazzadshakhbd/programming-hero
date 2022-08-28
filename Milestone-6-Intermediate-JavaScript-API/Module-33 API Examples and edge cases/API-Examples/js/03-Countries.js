const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => display(data))
}
const display = countries => {
    // console.log(countries);
    const main = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Country: ${country.name}</h3>
            <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cioc}')">Details</button>
        `;
        main.appendChild(countryDiv);
    })
}
const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('sazzad', code)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = (country) => {
    // console.log(country)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h2>${country.name}</h2>
        <img src="${country.flags.png}">
    `
}
loadCountries();