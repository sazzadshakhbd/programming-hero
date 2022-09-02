const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

// [{.......},{........}]


// Destructuring
const { found, message, result } = person;
console.log(result);

// Without Destructuring
// person.result.forEach(SinglePerson = {

// });

// Destructiureing
// result.forEach((singlePerson, index) => {
// document.getElementById('results-found').innerText = message;
document.getElementById('results-found').innerText = `Found ${found} Persons`
result.forEach(singlePerson => {
    // console.log(singlePerson);
    const cardContainer = document.getElementById('card-container');
    const personCard = document.createElement('div');
    personCard.classList.add('col');
    personCard.innerHTML = `
    <!--<h1>Person {index + 1}</h1>-->
    <div class="card shadow-lg">
        <div class="card-body">
            <h5 class="card-title">Name: <span class="text-success ps-2">${singlePerson.name.common}</span></h5>
            <p class="card-text">Age:  <span class="text-success ps-2">${singlePerson.age}</span></p>
            <p class="card-text">
                Street:  <span class="text-success ps-2">${singlePerson.address.street}</span>
                House:  <span class="text-success ps-2">${singlePerson.address.house}</span>
            </p>
        </div>
    </div>
    `;
    cardContainer.appendChild(personCard);
})