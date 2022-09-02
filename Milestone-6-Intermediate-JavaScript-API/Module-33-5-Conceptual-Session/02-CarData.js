const data = [
    {
        _id: "60795d4e0489a32f948c4167",
        name: "Honda Sedan",
        price: "132",
        description:
            "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
        imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
        _id: "60795e440489a32f948c4168",
        name: "MitoSedan",
        price: "221",
        description:
            "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
        _id: "60795fc20489a32f948c4169",
        name: "Isuzu Tacoma",
        price: "105",
        description:
            "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
        _id: "6079615d0489a32f948c416a",
        name: "Chevrolet Crossover",
        price: "434",
        description:
            "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",

    },
];


data.forEach(car => {
    console.log(car);

    // 1. Destructure
    const { id, name, price, description, imageURL } = car;
    // Capture the Container
    const cardContainer = document.getElementById('card-container');
    // Create the div
    const singleCard = document.createElement('div');
    singleCard.classList.add('col');
    // Set Innerhtml
    singleCard.innerHTML = `
    <div class="card p-5">
        <img src="${imageURL ? imageURL : 'https://i.ibb.co/g9CSkZQ/image.png'}" class="card-img-top w-75 mx-auto" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">Car Name:<span class="text-success ps-2">${name}</span></h5>
            <p class="card-text">Car Detail: ${description}</p>
            <button class="btn btn-primary">Car Price: <span class="pl-2">${price}</span></button>
        </div>
    </div>
    `;
    // Append the div inside the container
    cardContainer.appendChild(singleCard);


})












//   Not Found image
//   https://i.ibb.co/g9CSkZQ/image.png