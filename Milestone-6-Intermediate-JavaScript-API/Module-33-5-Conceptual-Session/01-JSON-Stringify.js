const person = {
    name: {
        common: "John",
        fullName: ['John', 'Doe']
    },
    age: 32,
    isMale: false,
    address: {
        street: '13/A, St Joseph',
        house: 10
    },
}

const jsonStringfied = JSON.stringify(person);
// console.log(jsonStringfied);

const parsedJson = JSON.parse(jsonStringfied);
// console.log(parsedJson);

// Destructuring 
const { name, age, isMale, address } = parsedJson;
// console.log(address);

const { common, fullName } = name;
// console.log(fullName);

const personContainer = document.getElementById('person-container');
personContainer.innerHTML = `
    <h2>Common Name: ${common}</h2>
    <h3>FullName: ${fullName[0]} ${fullName[1]}</h3>
    <h3>FullName: ${fullName.join(' ')}</h3>
    <p>Age: ${age}</p>
    <p>Gender: ${isMale === true ? "Male" : "Female"}</p>
`