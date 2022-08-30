const loadPhone = async (searchText, dataLimit) => {
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}
const displayPhones = (phones, dataLimit) => {
    // console.log(phones);
    const mainContainer = document.getElementById('phone-contianer');
    mainContainer.textContent = '';
    // Display 3 phones only & Show All Button
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }
    //  Display no phones found
    const noPhone = document.getElementById('no-phones-found');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    } else {
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top img-fluid px-5 py-3" alt="${phone.brand}">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-info text-white" data-bs-toggle="modal"
                data-bs-target="#phoneDetailsModal">Show Details</button>
            </div>
        </div>
        `;
        mainContainer.appendChild(phoneDiv);

    });
    // Stop Loader
    toogleSpinner(false);
}

// Commonm Function Variable 
const processSearch = (dataLimit) => {
    // Start Loader
    toogleSpinner(true);
    // Search Options
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText, dataLimit);
    // searchField.value = '';
}

// Handel Search Button Click
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10);
})

// Search Input Field Enter Key Handelar
document.getElementById('search-field').addEventListener('keypress', function (event) {
    // console.log(event.key)
    if (event.key === 'Enter') {
        processSearch(10);
    }
})

// Loader Function 
const toogleSpinner = (isLoading) => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}

// Not the Best Way to load show all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

// Phone Details
const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}
const displayPhoneDetails = (phone) => {
    console.log(phone)
    const modlaTitle = document.getElementById('phoneDetailsModalLabel');
    modlaTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Note: ${phone.releaseDate ? phone.releaseDate : "No Release Date Found"}</p>
        <p>Storage Info: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information'}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information  '}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'No Sennsor '}</p>
    `
}

loadPhone('apple')