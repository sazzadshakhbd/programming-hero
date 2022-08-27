const url = ('https://jsonplaceholder.typicode.com/users');

function loadUsers2() {
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

// function displayData(data) {
//      console.log(data);
//     for (user of data) {
//         console.log(user);
//         console.log(user.name);
//         console.log(user.email);
//         console.log(user.username);
//     }
// }

function displayData(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}