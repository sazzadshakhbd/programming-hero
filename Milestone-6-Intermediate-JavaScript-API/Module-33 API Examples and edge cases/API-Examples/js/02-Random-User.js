const url = 'https://randomuser.me/api/?results=10';
function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.results))
}
displayData = usersInfo => {
    // console.log(users)
    const mainContainer = document.getElementById('user-container');
    // console.log(mainContainer);
    for (users of usersInfo) {
        console.log(users);
        const div = document.createElement('div');
        div.classList.add('contianer');
        div.innerHTML = `
            <ul>
                <li>Cell Number: ${users.cell}</li>
                <li>Age: ${users.dob.age}</li>
                <li>Date: ${users.dob.date}</li>
                <li>Email: ${users.email}</li>
                <li>Gender: ${users.gender}</li>
                <li>ID-Name: ${users.id.name}</li>
                <li>ID-Value: ${users.id.value}</li>
                <li>City: ${users.location.city}</li>
                <li>Longitude: ${users.location.coordinates.longitude}, ${users.location.coordinates.latitude}</li>
                
            </ul>
        `
        mainContainer.appendChild(div);
    }
}
loadData();