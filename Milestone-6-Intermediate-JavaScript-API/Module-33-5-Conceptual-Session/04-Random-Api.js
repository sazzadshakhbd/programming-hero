const loadData = () => {
    fetch('https://randomuser.me/api/')
        // .then(response => console.log(response));
        // .then(response => console.log(response.json()));
        .then(response => response.json())
        .then(data => displayUser(data.results[0]))
}
const displayUser = (person) => {
    console.log(person);
    const { picture, name, email, location } = person;
    const { large } = picture;
    const { title, first, last } = name;
    const { street } = location
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 h-100">
            <img src="${large}" class="w-100 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Name: ${title}, ${first}, ${last}</h5>
              <p class="card-text">Loaction: ${street.number}, ${street.name}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
}
// loadData();